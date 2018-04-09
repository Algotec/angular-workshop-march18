import {Component} from '@angular/core';
import {PetService} from './pet.service';

@Component({
  selector: 'pets-component',
  template: `
    <ng-container [producer]="petsService">
      <mat-card>
        <mat-card-header>
          <mat-card-title><h1>Pets Display</h1></mat-card-title>
        </mat-card-header>
        <router-outlet></router-outlet>
      </mat-card>
    </ng-container>`
})
export class PetsComponent {
  constructor(public petsService: PetService) {
  }

}
