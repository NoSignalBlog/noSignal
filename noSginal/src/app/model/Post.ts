import {User} from "./User";
import {Timestamp} from "rxjs/Rx";

export class Post {
  id: number;
  user: User;
  title: String;
  userid: Number;
  visibility: boolean;
  likes: Number;
  text: String;
  date: Timestamp<Number>;
  videos: String;
  links: String;
  //messages: String[];

  constructor( user?: User, title?: String, visibility?: boolean, text?: String,
               links?: String,videos?: String, id?: number, likes?: Number) {
    this.links = links;
    this.videos = videos;
    this.text = text;
    this.likes = likes;
    this.visibility = visibility;
    this.title = title;
    this.user = user;
    this.id = id;

  }

}
