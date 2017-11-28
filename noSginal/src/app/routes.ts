import {Routes} from '@angular/router';
import {LoginComponent} from "./directives/login-component/login-component.component";
import {ErrorComponent} from "./directives/error/error.component";
import {Role} from "./model/User";
import {RouteGuard} from "./route.guard";

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: '**', component: ErrorComponent}
    ]
  }];
