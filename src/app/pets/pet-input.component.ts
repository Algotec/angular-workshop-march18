import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `
   <h4>Add Pet</h4> <input type="text" placeholder="Pet Name" [(ngModel)]="petModel.name"/>
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
