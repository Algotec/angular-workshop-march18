import {Component} from '@angular/core';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" #petInput />
    <button (click)="addPet(petInput.value)">Add Pet</button>
  `
})
export class PetInputComponent {
  addPet(petName) {
    console.log('Pet Added: ', petName) ;
  }

}
