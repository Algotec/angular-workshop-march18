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
        <!-- Pets would be iterated here using LI tag for each one -->
      </ul>
    </section>
  `
})
export class PetListComponent {
  constructor(public petService: PetService) {

  }


}
