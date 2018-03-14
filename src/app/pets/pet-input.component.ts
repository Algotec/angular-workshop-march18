import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" #petInput  [value]="petModel.name"/>
    <button (click)="addPet(petInput.value)">Add Pet</button>
  `
})
export class PetInputComponent {
  petModel = new PetModel('moki');
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet(petName: string) {
    this.petService.addPet(this.petModel);
  }

}
