import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  settingsForm: FormGroup;

  hasError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
      this.settingsForm = new FormGroup({
        password: new FormControl(this.authService.user.password, [Validators.required]),
        passwordVerify: new FormControl(this.authService.user.password, [Validators.required]),
        lastname: new FormControl(this.authService.user.lastname, [Validators.required]),
        firstname: new FormControl(this.authService.user.firstname, [Validators.required]),
        email: new FormControl(this.authService.user.email, [Validators.required]),
        profilePicture: new FormControl(this.authService.user.profilePicture, [])
      });
  }

  ngOnInit() {
  }

  submit() {
    this.authService.modifyUserSettings(new User("", this.password.value, this.lastname.value, this.firstname.value,
      this.email.value, this.profilePicture.value))
      .subscribe(
        res => this.router.navigate(['/posts']),
        err => this.hasError = true)
  }

  get password(): AbstractControl {
    return this.settingsForm.get('password');
  }

  get passwordVerify(): AbstractControl {
    return this.settingsForm.get('passwordVerifiy');
  }

  get lastname(): AbstractControl {
    return this.settingsForm.get('lastname');
  }

  get firstname(): AbstractControl {
    return this.settingsForm.get('firstname');
  }

  get email(): AbstractControl {
    return this.settingsForm.get('email');
  }

  get profilePicture(): AbstractControl {
    return this.settingsForm.get('profilePicture');
  }

}
