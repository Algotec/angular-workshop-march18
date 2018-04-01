import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'user-registration',
  template: `
    <form novalidate #ngForm="ngForm" (ngSubmit)="handleSubmit(ngForm)">
      <mat-card>
        <mat-card-title>{{title}}</mat-card-title>
        <mat-card-content>
          <mat-form-field>
            <input matInput #user="ngModel" ngModel required name='username' placeholder="Username"/>
            <mat-error *ngIf="user.invalid && user.touched">Username is required</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input matInput #pass="ngModel" ngModel required minlength='5' type="password" name='password' placeholder="Password"/>
            <mat-error *ngIf="pass.invalid && pass.touched">Password of Minimum length 5 characters is required</mat-error>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-raised-button color="primary" type="submit">SUBMIT</button>
        </mat-card-actions>
      </mat-card>
    </form>`
})
export class UserRegistrationComponent {
  @Input() title: string;
  @Output() formSubmit = new EventEmitter();

  handleSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      this.formSubmit.emit(ngForm.value);
    }
  }
}
