import { Component, Input } from '@angular/core';
import { PetModel } from './pet.model';
@Component({
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
    <div class="pet-renderer">
      <span [class.awake]="pet.awake" class="petName">{{pet.name}}</span>
      <input type="checkbox" [(ngModel)]="pet.awake">
      <img [src]="pet.imgUrl"/>
    </div>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;


}
