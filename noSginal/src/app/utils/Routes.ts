export class Routes {
  static LOGIN: String = 'usr/login';
  static REGISTER: String = 'usr/register';
  static GET_USER_BY_ID: String = "usr/search";
  static USER_SETTINGS: String = "usr/data"
  static LOGOUT: String = 'usr/logout';
  static POSTS: String = 'posts';
  static NEWPOST: String = 'posts/new';
  static LIKES: String = "posts/like";
  static CHECK_PASSWORD: String = "usr/check";
  static CHANGE_PASSWORD: String = "usr/changePwd";
  static EDITPOST: String = "posts/edit";
  static DELETEPOST: String = "posts/delete";
  static USERS: String = 'usr';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
