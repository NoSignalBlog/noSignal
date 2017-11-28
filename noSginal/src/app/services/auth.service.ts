import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/User";
import {Routes, Server} from "../utils/Routes";
import 'rxjs/Rx';


@Injectable()
export class AuthService {

  user: User;
  isLoggedIn: boolean = false;

  constructor(private http: Http) {
    this.user = new User();
  }

  login(user: User) {
    console.log(Object.keys(this.http.post(Server.routeTo(Routes.LOGIN), user)));
    console.log("teszt");
    return this.http.post(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        return this.user;
      })
  }
}
