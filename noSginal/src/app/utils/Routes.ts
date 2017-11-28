export class Routes {
  static LOGIN: String = 'usr/login';
  static REGISTER: String = 'usr/register';
  static LOGOUT: String = 'usr/logout';
  static POSTS: String = 'posts';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
