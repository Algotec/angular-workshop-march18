import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PetService} from './pet.service';

@Component({
  selector: 'pet-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`.petList {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
  }`],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h2>Pets List</h2></mat-card-title>
        <letter-selector [letter]="letter" (select)="letter = $event"></letter-selector>
      </mat-card-header>
      <mat-card-content class="petList">
        <ng-container *ngFor="let currPet of petService.pets$|async | petSearch:letter">
          <pet-renderer (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </ng-container>
      </mat-card-content>
      <mat-card-actions>
        <pet-input></pet-input>
      </mat-card-actions>
    </mat-card>

  `
})
export class PetListComponent {
  letter = 'A';

  constructor(public petService: PetService) {
  }


}
