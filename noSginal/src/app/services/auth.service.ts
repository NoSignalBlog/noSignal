import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Role, User} from "../model/User";
import {Routes, Server} from "../utils/Routes";
import 'rxjs/Rx';


@Injectable()
export class AuthService {

  user: User;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private http: Http) {
    this.user = new User();
  }

  login(user: User) {
    console.log(Object.keys(this.http.post(Server.routeTo(Routes.LOGIN), user)));
    return this.http.post(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        console.log(this.user);
        return this.user;
      })
  }

  logout() {
    return this.http.post(Server.routeTo(Routes.LOGOUT), this.user)
      .map(res => {
        this.user = new User();
        this.isLoggedIn = false;
      })
  }
}
