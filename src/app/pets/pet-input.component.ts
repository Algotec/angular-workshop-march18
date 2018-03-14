import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" [value]="petModel.name" (keyup)="petModel.name = $event.target.value"/>
    <button (click)="addPet()">Add Pet</button>
  `
})
export class PetInputComponent {
  petModel = new PetModel('');
  petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  addPet(petName: string) {
    this.petService.addPet(this.petModel);
    this.petModel = new PetModel();
  }

}
