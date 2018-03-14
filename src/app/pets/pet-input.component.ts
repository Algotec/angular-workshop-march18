import {Component} from '@angular/core';
import {PetService} from './pet.service';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" #petInput/>
    <button (click)="addPet(petInput.value)">Add Pet</button>
  `
})
export class PetInputComponent {
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet(petName: string) {
    this.petService.addPet(petName);
  }

}
