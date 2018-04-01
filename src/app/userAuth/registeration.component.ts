import {Component, Input} from '@angular/core';

@Component({
  selector: 'user-registration',
  template: `
    <form novalidate>
      <mat-card>
        <mat-card-title>{{title}}</mat-card-title>
        <mat-card-content>
          <mat-form-field>
            <input matInput placeholder="Username"/>
          </mat-form-field>
          <mat-form-field>
            <input matInput placeholder="Password"/>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-raised-button color="primary" type="submit">SUBMIT</button>
        </mat-card-actions>
      </mat-card>
    </form>`
})
export class UserRegistrationComponent {
  @Input() title:string;
}
