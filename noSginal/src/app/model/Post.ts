import {User} from "./User";
import {Timestamp} from "rxjs/Rx";

export class Post {
  id: Number;
  user: User;
  title: String;
  userid: Number;
  visibility: boolean;
  likes: number;
  text: String;
  date: Timestamp<Number>;
  videos: string;
  links: String;
  //messages: String[];

  constructor( id?: Number, title?: String, visibility?: boolean, text?: String, likes?: number,
               user?: User, videos?: string, links?: String) {
    this.links = links;
    this.videos = videos;
    this.text = text;
    this.likes = likes || 0;
    this.visibility = visibility || false;
    this.title = title;
    this.id = id || null;
    //this.userid = userid;
  }
}
