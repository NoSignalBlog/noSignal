import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {Post} from "../../model/Post";
import {PostService} from "../../services/post.service";
import {AuthService} from "../../services/auth.service";
import {Role} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: Array<Post>;

  constructor(private authService: AuthService, private postService: PostService, private router: Router) {
    this.postService.getPosts().subscribe(
      val => this.posts = val);
  }

  /*delete(id: number) {
    this.postService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }*/

  /*toDate(timestamp: number): Date {
    return new Date(timestamp)
  }*/

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

  checkUser(post: Post) : boolean {
    return (this.authService.user.username == post.user.username || this.authService.user.role == "ADMIN");
  }


}

  /*export class PostDataSource extends DataSource<any> {
  constructor(private postService: PostService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.postService.getPosts();
  }

  disconnect() {
  }*/

//}
