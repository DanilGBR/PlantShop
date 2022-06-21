export default class StorageHelper {
  private static readonly tokenKey: string = 'jwt-token';

  public static getToken(): string {
    return window.sessionStorage[this.tokenKey];
  }

  public static saveToken(token: string): void {
    window.sessionStorage[this.tokenKey] = token;
  }

  public static clearToken(): void {
    window.sessionStorage.removeItem(this.tokenKey);
  }
}
