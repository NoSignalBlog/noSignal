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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
