export class Routes {
  static LOGIN: String = 'usr/login';
  static REGISTER: String = 'usr/register';
  static LOGOUT: String = 'usr/logout';
  static POSTS: String = 'posts';
}

export class Server {
  private static address: String = 'localhost';
  //TODO server port?
  private static port: String = '8080';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${route}`
  }
}
