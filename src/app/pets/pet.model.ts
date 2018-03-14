export class PetModel {
  static maxId = 0;
  private static feedingLastForMillis = 20000;
  // == Data Members ==
  id: number;
  name: string;
  awake: boolean;
  lastFed: number;

  get imgUrl(): string {
    return `assets/pet/${this.id}.png`;
  }

  toggle() {
    this.awake = !this.awake;
  }

  feed() {
    this.lastFed = Date.now();
    this.awake = true;
  }

  get nextFeedAt() {
    return this.lastFed + PetModel.feedingLastForMillis;
  }

  constructor(name = '', awake = true) {
    this.name = name;
    this.awake = awake;
    this.id = ++PetModel.maxId;
    this.lastFed = Date.now();
  }


}


