import {Timestamp} from "rxjs/Rx";

export class SignalComment {
  id: Number;
  userid: Number;
  postid: Number;
  date: Timestamp<Number>;
  text: string;
  username: String;

  constructor(userid?: Number, data?: string, postid?: Number, id?: Number,) {
    this.text = data;
    this.id = id || null;
    this.postid = postid;
    this.userid = userid || null;
  }
}
