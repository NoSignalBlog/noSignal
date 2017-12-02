import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passwordForm: FormGroup = new FormGroup({
    oldpassword: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required]),
    newpasswordverify: new FormControl('', [Validators.required])
  });

  hasError: boolean = false;
  oldPasswordIsOk = false;
  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
      this.hasError = false;
      this.user = this.authService.user;
      this.user.password = this.oldpassword.value;
      this.authService.checkPassword(this.user).subscribe(res =>
          this.oldPasswordIsOk =  res.json());

      this.hasError = this.newpasswordverify.value != this.newpassword.value || !this.oldPasswordIsOk;
      if (!this.hasError) {
          this.user.password = this.newpassword.value;
          this.authService.changePassword(this.user).subscribe(
            res => { this.user.password = ""; this.router.navigate(["/posts"]) },
            err => this.hasError = true);
      }
  }

  get oldpassword(): AbstractControl {
    return this.passwordForm.get('oldpassword');
  }

  get newpassword(): AbstractControl {
    return this.passwordForm.get('newpassword');
  }

  get newpasswordverify(): AbstractControl {
    return this.passwordForm.get('newpasswordverify');
  }
}
