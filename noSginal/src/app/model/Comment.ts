import {Timestamp} from "rxjs/Rx";

export class SignalComment {
  id: Number;
  userid: Number;
  date: Timestamp<Number>;
  data: string;
  text: string;

  constructor(id?: Number, data?: string,) {
    this.data = data;
    this.text = data;
    this.id = id || null;
  }
}
