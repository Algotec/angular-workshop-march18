import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'registration-container-component',
  template: `
    <user-registration title="Registration" (formSubmit)="handleForm($event)"></user-registration>`
})

export class RegistrationContainerComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  handleForm(user) {
    this.authService.register(user);
    this.router.navigate(['login']);
  }


}
