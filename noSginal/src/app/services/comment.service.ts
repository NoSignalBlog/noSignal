import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/Routes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {SignalComment} from "../model/Comment";

@Injectable()
export class SignalCommentService {

  constructor(private http: Http) {
  }

  getComments(): Observable<SignalComment[]> {
     return this.http.get(Server.routeTo(Routes.GETCOMMENTS))
       .map(res => res.json())
  }

  create(comment: SignalComment): Observable<Comment> {
    console.log(comment);
    return this.http.post(Server.routeTo(Routes.NEWCOMMENT), comment).map(
      res => res.json()
    );
  }

  // like(post: Post) {
  //   return this.http.post(Server.routeTo(Routes.LIKES), post);
  // }
  //
  //
  // modify(): Observable<Post> {
  //   //console.log(post);
  //   return this.http.put(Server.routeTo(Routes.EDITPOST + '/' + this.postToEdit.id ), this.postToEdit)
  //     .map(
  //       res => res.json()
  //     );
  // }
  //
  // delete(): Observable<Post> {
  //   return this.http.delete(Server.routeTo(Routes.DELETEPOST + '/' + this.postToEdit.id))
  //     .map(
  //       res => res.json()
  //     );
  // }

}
