import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required])
  });
  hasError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {}

  submit() {
    //console.log("submit");
    this.authService.login(new User(this.username.value, this.password.value))
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true)
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}

