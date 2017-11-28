import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { LoginComponent } from './directives/login-component/login-component.component';
import {appRoutes} from "./routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouteGuard} from "./route.guard";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { ErrorComponent } from './directives/error/error.component';
import {MaterialItemsModule} from "./MaterialItemsModule";


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
