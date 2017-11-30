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
    text: new FormControl('', [Validators.required])
  });
  hasError: boolean = false;
  checked = false;

  constructor(private authService: AuthService, private router: Router, private postService: PostService) {
  }

  ngOnInit() {}

  submit() {
    //console.log("submit");
    this.postService.create(new Post(this.authService.user, this.title.value, this.checked, this.text.value ))
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
}

