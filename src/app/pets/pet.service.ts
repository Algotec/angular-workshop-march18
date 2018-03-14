import {PetModel} from './pet.model';
export class PetService {

  public pets: PetModel[] = [
    new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')];


  addPet(pet: PetModel) {
    this.pets = [...this.pets, pet];
    console.log('pet added', this.pets);
  }

  feed(pet: PetModel) {
    pet.feed();
    this.pets = [...this.pets];
  }

  toggleAwake(pet) {
    pet.toggle();
    // not a must for now, but keep this for when your pipe will filter by awake..
    this.pets = [...this.pets];
  }
}
