import {Timestamp} from "rxjs/Rx";

export class Role {
  static GUEST: String = "GUEST";
  static USER: String = "USER";
  static ADMIN: String = "ADMIN";
}

export class User {
  username: String;
  lastname: String;
  firstname: String;
  password: String;
  email: String;
  role: String;
  registerDate: Timestamp<Number>;
  profilepicture: String;
  id: Number;

  constructor(username?: String, password?: String, lastname?: String, firstname?: String,  email?: String,
              profilepicture?: String, role?: String, registerDate?: Timestamp<Number>) {
    this.username = username || "";
    this.lastname = lastname || "";
    this.firstname = firstname || "";
    //TODO register date
    //this.registerDate = registerDate || "";
    this.profilepicture = profilepicture || "";
    this.password = password || "";
    this.email = email || "";
    this.role = role || Role.GUEST;
  }
}
