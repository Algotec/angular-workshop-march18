import {Component} from '@angular/core';

@Component({
  selector: 'pets-component',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h1>Pets Display</h1></mat-card-title>
      </mat-card-header>
      <router-outlet></router-outlet>
    </mat-card>`
})
export class PetsComponent {

}
