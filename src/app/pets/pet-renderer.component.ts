import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {PetModel} from './pet.model';

@Component({
  encapsulation: ViewEncapsulation.Emulated, // switch to .Native and.None to see the difference
  selector: 'pet-renderer',
  styles: [`
    img {
      max-height: 100px;
    }

    mat-card-actions, mat-card-content {
      text-align: center;
    }

    .awake {
      color: #ff9e3f;
    }`
  ],
  template: `
    <mat-card class="pet-renderer" [routerLink]="[pet.id]">
      <mat-card-header>
        <mat-card-title>
          <span [class.awake]="pet.awake" class="petName">{{pet.name}}</span>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <img [src]="pet.imgUrl"/>
        <div>
          <small>Time till asleep</small>
          <countdown [to]="pet.nextFeedAt" (due)="petAwakeToggle()"></countdown>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="accent" (click)="feedPet($event)">Feed</button>
      </mat-card-actions>
    </mat-card>`
})
export class PetRendererComponent {
  @Input() pet: PetModel;
  @Output() awakeChange = new EventEmitter();
  @Output() feed = new EventEmitter();

  petAwakeToggle() {
    this.awakeChange.emit();
  }

  feedPet($event: MouseEvent) {
    $event.stopPropagation();
    this.feed.emit(this.pet);
    return false;
  }

}
