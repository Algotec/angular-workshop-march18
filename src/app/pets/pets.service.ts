export class PetService {
  public pets = [
    'Avsha', 'Abulele', 'AvAv',
    'Banian', 'Baba', 'Basta',
    'Craco', 'Charli', 'Chompi'];

  addPet(petName: string) {
    this.pets.push(petName);
    console.log('pet added', this.pets);
  }
}
