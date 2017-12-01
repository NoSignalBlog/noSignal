import {User} from "./User";
import {Timestamp} from "rxjs/Rx";
import {AuthService} from "../services/auth.service";

export class Post {
  id: number;
  user: User;
  title: String;
  userid: Number;
  visibility: boolean;
  likes: number;
  text: String;
  date: Timestamp<Number>;
  videos: String;
  links: String;
  //messages: String[];

  constructor( id?: number, user?: User, title?: String, visibility?: boolean, likes?: number, text?: String,
               links?: String,videos?: String,) {
    this.links = links;
    this.videos = videos;
    this.text = text;
    this.likes = likes || 0;
    this.visibility = visibility;
    this.title = title;
    this.id = id || 0;
    //this.userid = userid;
  }
}
