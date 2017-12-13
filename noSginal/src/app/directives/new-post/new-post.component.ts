import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Post} from "../../model/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  newPostForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
    checked: new FormControl('', []),
    video: new FormControl('', [])
  });
  hasError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private postService: PostService) {
  }

  ngOnInit() {}

  submit() {
    console.log(this.authService);
    this.postService.create(new Post(this.authService.userid.valueOf(), this.title.value, this.checked.value, this.text.value, 0, this.authService.user, this.video.value ))
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true)
  }

  get title(): AbstractControl {
    return this.newPostForm.get('title');
  }

  get text(): AbstractControl {
    return this.newPostForm.get('text');
  }

  get checked(): AbstractControl {
    return this.newPostForm.get('checked');
  }

  get video(): AbstractControl {
    return this.newPostForm.get('video');
  }
}

