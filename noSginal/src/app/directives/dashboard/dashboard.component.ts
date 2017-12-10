import { Component, OnInit } from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  displayedColumns: String[] = ["username", "firstname", "lastname", "email", "edit"];
  userDataSource: DataSource<any> = new UserDataSource(this.authService);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  saveUserId(id: Number) {
    this.authService.queryUserId = id;
    this.router.navigate(['/users']);
  }
}

export class UserDataSource extends DataSource<any> {

  constructor(private authService: AuthService) { super(); }

  connect(): Observable<any[]> { return this.authService.getUsers(); }

  disconnect(): void {}
}
