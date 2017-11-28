import {Component, OnInit} from '@angular/core';
import {Role} from "../../model/User";
import {AuthService} from "../../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";

interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private common: MenuItem[] = [
    {link: '/posts', title: 'Main'},
    {link: '/newpost', title: 'New Post'},
    {link: '/editpost', title: 'Edit Post'},
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/settings', title: 'Settings'}
  ];

  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [{link: '/posts', title: 'Main'}]],
    [Role.USER, [{link: '/posts', title: 'Main'},
      {link: '/newpost', title: 'New Post'},
      {link: '/editpost', title: 'Edit Post'},
      {link: '/settings', title: 'Settings'}]],
    [Role.ADMIN, [...this.common]]
  ]);

  menus: MenuItem[];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenus()
      }
    })
  }

  setMenus() {
    if (this.authService.isLoggedIn) {
      console.log(this.authService.user.role);
      this.menus = this.roleMenus.get(this.authService.user.role);
    } else {
      this.menus = this.roleMenus.get(Role.GUEST)
    }
  }

  logout() {
    this.authService.logout().subscribe(
      res => this.router.navigate(['/login']),
      err => err
    );
  }
}
