import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {SignalCommentService} from "../../services/comment.service";
import {SignalComment} from "../../model/Comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  textCtrl: FormControl = new FormControl('', [Validators.required]);
  hasError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private postService: PostService, private signalCommentService: SignalCommentService) {
  }

  ngOnInit() {}

  submit(id: Number) {
    this.postService.showCommentSection = false;
    this.signalCommentService.create(new SignalComment(this.authService.userid.valueOf(), this.textCtrl.value, id ))
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true)
  }
}
