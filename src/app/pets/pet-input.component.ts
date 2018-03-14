import {Component} from '@angular/core';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" />
    <button>Add Pet</button>
  `
})
export class PetInputComponent {
  addPet(petName) {
    console.log('Pet Added: ', petName);
  }

}
