import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordVerify: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profilepicture: new FormControl('', [Validators.required])
  });

  pictures = [
    {value: 'prof1.jpg', viewValue: 'Prof 1'},
    {value: 'prof2.png', viewValue: 'Prof 2'},
    {value: 'prof3.png', viewValue: 'Prof 3'},
    {value: 'icon.png', viewValue: 'Prof 4'}
  ];

  hasError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {}

  submit() {
    this.hasError = this.password.value != this.passwordVerify.value;
    if (!this.hasError) {
      this.authService.register(new User(this.username.value, this.password.value, this.lastname.value, this.firstname.value,
        this.email.value, this.profilepicture.value))
        .subscribe(
          res => this.router.navigate(['/login']),
          err => this.hasError = true)
    }
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get passwordVerify(): AbstractControl {
    return this.registerForm.get('passwordVerify');
  }

  get lastname(): AbstractControl {
    return this.registerForm.get('lastname');
  }

  get firstname(): AbstractControl {
    return this.registerForm.get('firstname');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get profilepicture(): AbstractControl {
    return this.registerForm.get('profilepicture');
  }
}
