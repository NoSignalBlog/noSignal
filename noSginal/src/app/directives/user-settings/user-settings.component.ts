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

  pictures = [
    {value: 'prof1.jpg', viewValue: 'Prof 1'},
    {value: 'prof2.png', viewValue: 'Prof 2'},
    {value: 'prof3.png', viewValue: 'Prof 3'},
    {value: 'icon.png', viewValue: 'Prof 4'}
  ];

  constructor(private authService: AuthService, private router: Router) {
      this.settingsForm = new FormGroup({
        lastname: new FormControl(this.authService.user.lastname, [Validators.required]),
        firstname: new FormControl(this.authService.user.firstname, [Validators.required]),
        email: new FormControl(this.authService.user.email, [Validators.required, Validators.email]),
        profilepicture: new FormControl(this.authService.user.profilepicture, [Validators.required])
      });
  }

  ngOnInit() {
  }

  submit() {
      this.authService.modifyUserSettings(new User("", "", this.lastname.value, this.firstname.value,
        this.email.value, this.profilepicture.value))
        .subscribe(
          res => this.router.navigate(['/posts']),
          err => this.hasError = true)
  }

  changePwd() {
    this.router.navigate(['/changePwd']);
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

  get profilepicture(): AbstractControl {
    return this.settingsForm.get('profilepicture');
  }

}
