import {Component} from '@angular/core';
import "rxjs/add/observable/of";
import {Post} from "../../model/Post";
import {PostService} from "../../services/post.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SignalCommentService} from "../../services/comment.service";
import {SignalComment} from "../../model/Comment";
import {FormControl, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {User} from "../../model/User";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: Array<Post>;
  comments: Array<SignalComment>;
  commentsTmp: Array<SignalComment>;
  textCtrl: FormControl = new FormControl('', [Validators.required]);
  hasError: boolean = false;
  ú
  users: User[];


  constructor(private authService: AuthService, private postService: PostService, private router: Router,
              private signalCommentService: SignalCommentService, private sanitizer: DomSanitizer) {
    this.postService.getPosts().subscribe(
      val => this.posts = val);
    this.signalCommentService.getComments().subscribe(
      val => {
        this.comments = val;
        this.authService.getUsers().subscribe(val => {
          this.users = val;
          for (let comment of this.comments) {
            for (let user of this.users) {
              if (comment.userid == user.id) {
                comment.username = user.username;
              }
            }
          }
        })
      });

  }

  getUrl(post: Post) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(post.videos.replace("watch?v=", "embed/"));
  }

  like(post: Post) {
    this.postService.like(post).subscribe(
      res => post.likes = res.json().likes,
      err => console.log(err)
    );
  }

  edit(post: Post) {
    this.postService.postToEdit = post;
    this.router.navigate(['/editpost']);
  }

  checkUser(post: Post): boolean {
    return (this.authService.user.username == post.user.username || this.authService.user.role == "ADMIN");
  }

  saveUserId(post: Post) {
    this.authService.queryUserId = post.userid;
    this.router.navigate(['/users']);
  }

  submit(id: Number) {
    console.log(id);
    this.signalCommentService.create(new SignalComment(this.authService.userid.valueOf(), this.textCtrl.value, id))
      .subscribe(
        res => this.reload(),
        err => this.hasError = true)
  }

  private reload() {
    this.signalCommentService.getComments().subscribe(
      val => {
        this.commentsTmp = val;
        for (let comment of this.commentsTmp) {
          for (let user of this.users) {
            if (comment.userid == user.id) {
              comment.username = user.username;
            }
          }
        }
        this.comments = this.commentsTmp;
      });
  }

}

