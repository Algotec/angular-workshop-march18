import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `
    <h4>Add Pet</h4>
    <mat-form-field>
      <input matInput type="text" placeholder="Pet Name" [(ngModel)]="petModel.name"/>
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="addPet()">Add Pet</button>
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
