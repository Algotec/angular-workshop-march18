import {PetModel} from './pet.model';
export class PetService {

  public pets: PetModel[] = [
    new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')];


  addPet(pet: PetModel) {
    this.pets.push(pet);
    console.log('pet added', this.pets);
  }
}
