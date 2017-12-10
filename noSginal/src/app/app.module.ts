import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {LoginComponent} from './directives/login-component/login-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {appRoutes} from "./routes";
import {MaterialItemsModule} from "./MaterialItemsModule";
import {ErrorComponent} from './directives/error/error.component';
import {RouteGuard} from "./route.guard";
import {MenuComponent} from './directives/menu/menu.component';
import {RegisterComponent} from './directives/register/register.component';
import {PostComponent} from './directives/post/post.component';
import {PostService} from "./services/post.service";

import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {NewPostComponent} from "./directives/new-post/new-post.component";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LikeButtonComponent } from './directives/like-button/like-button.component';
import { UserSettingsComponent } from './directives/user-settings/user-settings.component';
import { PasswordChangeComponent } from './directives/password-change/password-change.component';
import { WelcomeComponent } from './directives/welcome/welcome.component';
import { EditPostComponent } from './directives/edit-post/edit-post.component';
import { UserPageComponent } from './directives/user-page/user-page.component';
import { SearchUserComponent } from './directives/search-user/search-user.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {SignalCommentService} from "./services/comment.service";
import { DashboardComponent } from './directives/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    RegisterComponent,
    PostComponent,
    NewPostComponent,
    LikeButtonComponent,
    UserSettingsComponent,
    PasswordChangeComponent,
    WelcomeComponent,
    EditPostComponent,
    UserPageComponent,
    SearchUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatAutocompleteModule
  ],
  providers: [AuthService, RouteGuard, PostService, SignalCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
