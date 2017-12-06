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
  searchCtrl: FormControl;
  filteredUsers: Observable<User[]>;
  users: Array<User>;

  constructor(private authService: AuthService, private postService: PostService, private router: Router) {
    this.users = this.authService.users;
    this.searchCtrl = new FormControl();
  }

  filterUsers(username: String): User[] {
    return this.users.filter(user =>
      user.username.toLowerCase().indexOf(username.toLowerCase()) === 0);
  }

  ngOnInit() {
    this.authService.getUsers().subscribe(
      val =>
      {
        this.users = val;
        this.filteredUsers = this.searchCtrl.valueChanges
          .pipe(
            startWith(''),
            map(user => this.filterUsers(<String>user))
          );
      });
  }

  search(user: User) {
    this.authService.queryUserId = user.id;
    this.router.navigate(['/users']);
  }
}
