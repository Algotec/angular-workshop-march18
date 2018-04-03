import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, publishReplay, refCount, shareReplay, takeUntil, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {IUser} from './user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  static baseUrl = 'http://localhost:3003/data/users';
  private usersCache$: Observable<IUser[]>;
  private reload$ = new Subject<null>();
  currentUser: string;

  get isLoggedIn(): boolean {
    // console.log('touched'); // to explain the problem of using such getter/setters, show angular-async-local-storage
    return self.localStorage.getItem('loggedIn') === 'true';
  }

  set isLoggedIn(value: boolean) {
    self.localStorage.setItem('loggedIn', value.toString());
  }


  constructor(private http: HttpClient) {
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login({username, password}) {
    return this.getUsers()
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

  public getUsers() {
    if (!this.usersCache$) {
      this.usersCache$ = this.http.get<IUser[]>(AuthService.baseUrl)
      // see https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
        .pipe(
          takeUntil(this.reload$),
          shareReplay(1),
        );
    }
    return this.usersCache$;
  }

  forceReloadUsers() {
    this.reload$.next();
    this.usersCache$ = null;
  }

  register(user) {
    this.forceReloadUsers();
    return this.http.post(AuthService.baseUrl, user).toPromise();
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = '';
  }
}
