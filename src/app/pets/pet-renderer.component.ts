import {Component, Input} from '@angular/core';
import {PetModel} from './pet.model';
@Component({
  selector: 'pet-renderer',
  styles: [`img {max-height:100px;}`],
  template: `
    <div class="pet-renderer">
      <span class="petName">{{pet.name}}</span>
      <input type="checkbox" [(ngModel)]="pet.awake">
      <img [src]="pet.imgUrl"/>
      <p [hidden]="!pet.awake">
        Pet is awake
      </p>
    </div>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;


}
