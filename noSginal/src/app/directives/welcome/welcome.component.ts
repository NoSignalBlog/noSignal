import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

}
