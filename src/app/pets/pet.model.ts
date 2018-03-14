export class PetModel {
  static maxId = 0;
  // == Data Members ==
  id: number;
  name: string;
  awake: boolean;

  get imgUrl(): string {
    return `assets/pet/${this.id}.png`;
  }


  constructor(name = '', awake = true) {
    this.name = name;
    this.awake = awake;
    this.id = ++PetModel.maxId;
  }


}


