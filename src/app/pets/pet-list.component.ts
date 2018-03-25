import {Component} from '@angular/core';
import {PetService} from './pet.service';

@Component({
  selector: 'pet-list',
  styles: [`li {
    list-style: none;
    display: inline-block;
    margin: 10px;
    padding: 5px;
    text-align: center;
    border: 1px solid #aaa;
    border-radius: 4px;
  }`],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h2>Pets List</h2></mat-card-title>
      </mat-card-header>


      <letter-selector [letter]="letter" (select)="letter = $event"></letter-selector>
      <ul>
        <li *ngFor="let currPet of petService.pets | petSearch:letter">
          <pet-renderer (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
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
