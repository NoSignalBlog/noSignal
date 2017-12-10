import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/User";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";
import {Post} from "../../model/Post";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  users: Array<User>;
  posts: Array<Post>;

  constructor(private authService: AuthService, private postService: PostService, private router: Router, private sanitizer: DomSanitizer) {
    this.authService.getUsers().subscribe(
      val => this.users = val);
    this.postService.getPosts().subscribe(
      val => this.posts = val);
  }

  getUrl(post: Post) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(post.videos.replace("watch?v=","embed/"));
  }

}


