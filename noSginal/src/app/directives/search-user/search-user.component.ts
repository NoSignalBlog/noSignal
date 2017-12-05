import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {AuthService} from "../../services/auth.service";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})



export class SearchUserComponent implements OnInit {
  stateCtrl: FormControl;
  filteredUsers: Observable<User[]>;
  users: Array<User>

  constructor(private authService: AuthService, private postService: PostService, private router: Router) {
    this.stateCtrl = new FormControl();
    this.filteredUsers = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(user =>  this.users.slice())
      );
  }

  ngOnInit() {
    this.authService.getUsers().subscribe(
      val => this.users = val);
  }

  filterStates(name: string) {
    return this.users.filter(state =>
      state.username.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }




}
