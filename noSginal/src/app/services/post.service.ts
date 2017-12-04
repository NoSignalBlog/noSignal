import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/Routes";
import {Observable} from "rxjs/Observable";
import {Post} from "../model/Post";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {

  postToEdit : Post;

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
    //console.log(post);
    return this.http.put(Server.routeTo(Routes.EDITPOST + '/' + this.postToEdit.id ), this.postToEdit).map(
      res => res.json()
    );
  }


  /*create(issue: Post): Observable<Post> {
    return this.http.post(Server.routeTo(Routes.POSTS), issue)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.POSTS) + '/' + id)
      .map(res => res.json())
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.POSTS) + '/' + id)
      .map(res => res.json())
  }

  update(issue: Post) {
    return this.http.put(Server.routeTo(Routes.POSTS) + '/' + issue.id, issue)
      .map(res => res.json())
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.POSTS + '/' + id + '/message'), {message})
  }*/
}
