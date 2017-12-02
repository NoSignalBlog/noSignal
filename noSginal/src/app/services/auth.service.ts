import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Role, User} from "../model/User";
import {Routes, Server} from "../utils/Routes";
import 'rxjs/Rx';
import {Post} from "../model/Post";


@Injectable()
export class AuthService {

  user: User;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userid : Number;

  constructor(private http: Http) {
    this.user = new User();
  }

  register(user: User) {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res => {
        return this.user;
      })
  }

  login(user: User) {
    return this.http.post(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        this.userid = this.user.id;
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

  modifyUserSettings(user: User) {
    user.id = this.user.id;
    user.role = this.user.role;
    this.user = user;
    return this.http.put(Server.routeTo(Routes.USER_SETTINGS + "/" + this.user.id), this.user);
  }
}
