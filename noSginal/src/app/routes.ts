import {Routes} from '@angular/router';
import {LoginComponent} from "./directives/login-component/login-component.component";
import {ErrorComponent} from "./directives/error/error.component";
import {Role} from "./model/User";
import {RouteGuard} from "./route.guard";
import {RegisterComponent} from "./directives/register/register.component";
import {PostComponent} from "./directives/post/post.component";
import {NewPostComponent} from "./directives/new-post/new-post.component";
import {UserSettingsComponent} from "./directives/user-settings/user-settings.component";
import {PasswordChangeComponent} from "./directives/password-change/password-change.component";
import {EditPostComponent} from "./directives/edit-post/edit-post.component";
import {UserPageComponent} from "./directives/user-page/user-page.component";
import {CommentComponent} from "./directives/comment/comment.component";

export const appRoutes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: 'users', component: UserPageComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'editpost', component: EditPostComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'settings', component: UserSettingsComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'changePwd', component: PasswordChangeComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'newpost', component: NewPostComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'posts', component: PostComponent, data: {roles: [Role.USER, Role.ADMIN, Role.GUEST]}},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},
      {path: '**', component: ErrorComponent}
    ]
  }];
