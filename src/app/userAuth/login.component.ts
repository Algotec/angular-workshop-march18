import {Component} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  styles: [`:host {
    padding: 25px;
    display: block;
  }`],
  template: `
    <user-form [loginOnly]="true" *ngIf="!authService.isLoggedIn;else userblock" title="Login" (formSubmit)="login($event)"></user-form>
    <p>{{message}}</p>
    <ng-template #userblock>
      {{authService.currentUser}}
    </ng-template>
    <p>
      <button mat-raised-button color="warn" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
      <button mat-raised-button color="warn" (click)="gotoRegistration()" *ngIf="!authService.isLoggedIn">Register</button>
    </p>`
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage(actionSuccessValue?) {
    if (typeof actionSuccessValue !== 'undefined' && actionSuccessValue === false) {
      this.message = 'Login Failed - check username and password';
    } else {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
  }

  login(credentials) {
    this.message = 'Trying to log in ...';

    this.authService.login(credentials).subscribe((suceess) => {
      this.setMessage(suceess);
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        // Redirect the user but keep params
        // 				let navigationExtras: NavigationExtras = {
        // 					preserveQueryParams: true,
        // 					preserveFragment: true
        // 				};
        //
        // 				this.router.navigate([redirect], navigationExtras);
        this.router.navigate([redirect]);
      }
    });
  }

  gotoRegistration() {
    this.router.navigate(['registration']);

  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

