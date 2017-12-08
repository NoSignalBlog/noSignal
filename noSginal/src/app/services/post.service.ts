import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/Routes";
import {Observable} from "rxjs/Observable";
import {Post} from "../model/Post";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {

  postToEdit : Post;
  postToCommentOn : Post;
  showCommentSection: boolean = false;

  constructor(private http: Http) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(Server.routeTo(Routes.POSTS))
      .map(res => res.json())
  }

  create(post: Post): Observable<Post> {
    console.log(post);
    return this.http.post(Server.routeTo(Routes.NEWPOST), post).map(
      res => res.json()
    );
  }

  like(post: Post) {
    return this.http.post(Server.routeTo(Routes.LIKES), post);
  }


  modify(): Observable<Post> {
    return this.http.put(Server.routeTo(Routes.EDITPOST + '/' + this.postToEdit.id ), this.postToEdit)
      .map(
        res => res.json()
    );
  }

  delete(): Observable<Post> {
    return this.http.delete(Server.routeTo(Routes.DELETEPOST + '/' + this.postToEdit.id))
      .map(
        res => res.json()
      );
  }
}
