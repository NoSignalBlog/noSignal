import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  hasError: boolean = false;
  selectForDelete: boolean = false;

  constructor(private authService: AuthService, private router: Router, private postService: PostService) {
    if ( this.postService.postToEdit == null ) {
      this.hasError = true;
    } else {
      this.editPostForm = new FormGroup({
        title: new FormControl(this.postService.postToEdit.title, [Validators.required]),
        text: new FormControl(this.postService.postToEdit.text, [Validators.required]),
        checked: new FormControl(this.postService.postToEdit.visibility, [])
      });
    }
  }

  ngOnInit() {}

  submit() {
    this.postService.postToEdit.title = this.title.value;
    this.postService.postToEdit.text = this.text.value;
    this.postService.postToEdit.visibility = this.checked.value;
    this.postService.modify()
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true)
  }

  delete() {
    this.selectForDelete = !this.selectForDelete;
  }

  deletePost() {
    this.postService.delete()
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true
      );
  }

  get title(): AbstractControl {
    return this.editPostForm.get('title');
  }

  get text(): AbstractControl {
    return this.editPostForm.get('text');
  }

  get checked(): AbstractControl {
    return this.editPostForm.get('checked');
  }

}
