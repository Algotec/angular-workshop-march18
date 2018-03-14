export class PetModel {
  static maxId = 0;
  // == Data Members ==
  id: number;
  name: string;

  constructor(name = '') {
    this.name = name;
    this.id = ++PetModel.maxId;
  }


}


