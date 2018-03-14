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
      <ul>
        <li *ngFor="let currPet of petService.pets">
          <pet-renderer [pet]="currPet"></pet-renderer>
        </li>
      </ul>
    </section>
  `
})
export class PetListComponent {
  constructor(public petService: PetService) {
  }


}
