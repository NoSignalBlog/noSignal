import {Timestamp} from "rxjs/Rx";

export class SignalComment {
  id: Number;
  userid: Number;
  postid: Number;
  date: Timestamp<Number>;
  data: string;
  text: string;

  constructor(id?: Number, data?: string, postid?: Number) {
    this.data = data;
    this.text = data;
    this.id = id || null;
    this.postid = postid;
  }
}
