import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {PetModel} from './pet.model';

@Component({
  encapsulation: ViewEncapsulation.Emulated, // switch to .Native and.None to see the difference
  selector: 'pet-renderer',
  styles: [`
    img {
      max-height: 100px;
    }

    .awake {
      color: #ff9e3f;
    }`
  ],
  template: `
    <div class="pet-renderer" [routerLink]="[pet.id]">
      <span  [class.awake]="pet.awake" class="petName">{{pet.name}}</span>
      <img [src]="pet.imgUrl"/>
      <div>
        <small>Time till asleep</small>
        <countdown [to]="pet.nextFeedAt" (due)="petAwakeToggle()"></countdown>
      </div>
      <button (click)="feedPet()">Feed</button>
    </div>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;
  @Output() awakeChange = new EventEmitter();
  @Output() feed = new EventEmitter();

  petAwakeToggle() {
    this.awakeChange.emit();
  }

  feedPet() {
    this.feed.emit(this.pet);
  }

}
