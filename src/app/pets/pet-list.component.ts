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
    <section>
      <h2>Pet List</h2>
      <letter-selector [letter]="letter" (select)="letter = $event"></letter-selector>
      <ul>
        <li *ngFor="let currPet of petService.pets | petSearch:letter">
          <pet-renderer (awakeChange)="petService.toggleAwake(currPet)" [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
  `
})
export class PetListComponent {
  letter = 'A';

  constructor(public petService: PetService) {
  }


}
