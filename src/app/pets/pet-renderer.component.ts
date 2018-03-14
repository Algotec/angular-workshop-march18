import {Component, Input} from '@angular/core';
import {PetModel} from './pet.model';
@Component({
  selector:'pet-renderer',
  template:`
    <div class="pet-renderer">
      <span class="petName">{{pet.name}}</span>
      <input type="checkbox" [(ngModel)]="pet.awake">
      <p [hidden]="!pet.awake">
        Pet is awake
      </p>
    </div>`
})
export class PetRendererComponent{
  @Input() pet:PetModel;


}
