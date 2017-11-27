import {Routes} from '@angular/router';
import {RouteGuard} from "./route.guard";
import {LoginComponent} from "./directives/login-component/login-component.component";
import {Role} from "./model/User";

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}}
    ]
  }];
