import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../model/User";
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  users: Array<User>;
  posts: Array<Post>;

  constructor(private authService: AuthService, private postService: PostService, private router: Router) {
    this.authService.getUsers().subscribe(
      val => this.users = val);
    this.postService.getPosts().subscribe(
      val => this.posts = val);
  }

  /*delete(id: number) {
    this.postService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }*/

  /*toDate(timestamp: number): Date {
    return new Date(timestamp)
  }*/

  // like(post: Post) {
  //   this.postService.like(post).subscribe(
  //     res => post.likes = res.json().likes,
  //     err => console.log(err)
  //   );
  // }
  //
  // edit(post: Post) {
  //   this.postService.postToEdit = post;
  //   this.router.navigate(['/editpost']);
  // }
  //
  // checkUser(post: Post) : boolean {
  //   return (this.authService.user.username == post.user.username || this.authService.user.role == "ADMIN");
  // }


}

/*export class PostDataSource extends DataSource<any> {
constructor(private postService: PostService) {
  super();
}

connect(): Observable<Post[]> {
  return this.postService.getPosts();
}

disconnect() {
}*/

//}
