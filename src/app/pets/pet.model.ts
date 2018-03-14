export class PetModel {
  static maxId = 0;
  // == Data Members ==
  id: number;
  name: string;
  awake: boolean;

  constructor(name = '', awake = true) {
    this.name = name;
    this.awake = awake;
    this.id = ++PetModel.maxId;
  }


}


