import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  get isLoggedIn(): boolean {
   // console.log('touched'); // to explain the problem of using such getter/setters, show angular-async-local-storage
    return self.localStorage.getItem('loggedIn') === 'true';
  }

  set isLoggedIn(value: boolean) {
    self.localStorage.setItem('loggedIn', value.toString());
  }

  static baseUrl = 'http://localhost:3003/data/users';
  currentUser: string;

  constructor(private http: HttpClient) {
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login({username, password}) {
    return this.http.get(AuthService.baseUrl)
      .pipe(
        map((usersList: any[]) => {
          return Boolean(usersList.find((user) => user.username === username && user.password === password));
        }),
        tap(val => {
          this.isLoggedIn = val;
          if (val) {
            this.currentUser = username;
          }
        })
      );
  }

  register(user) {
    return this.http.post(AuthService.baseUrl, user).toPromise();
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = '';
  }
}
