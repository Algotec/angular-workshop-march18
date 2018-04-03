import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PetService} from './pet.service';
import {transition, trigger, animate, style} from '@angular/animations';

@Component({
  selector: 'pet-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    mat-card-header {
      display: block;
    }
    .petList {
      display: grid;
      grid-gap: 20px;
      min-height: 50vh;
      grid-template-columns: repeat(6, 1fr);
    }`],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h2>Pets List</h2></mat-card-title>
        <pet-input></pet-input>
        <letter-selector [letter]="letter" (select)="letter = $event"></letter-selector>
      </mat-card-header>
      <mat-card-content class="petList">
        <ng-container *ngFor="let currPet of petService.pets$|async | petSearch:letter">
          <pet-renderer @flyInOut (feed)="petService.feed(currPet)" (awakeChange)="petService.toggleAwake(currPet)"
                        [pet]="currPet"></pet-renderer>
        </ng-container>
      </mat-card-content>
    </mat-card>

  `
  ,
  animations: [trigger('flyInOut', [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate(500, style({transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      animate(500, style({transform: 'translateY(100%)'}))
    ])])]
})
export class PetListComponent {
  letter = 'A';

  constructor(public petService: PetService) {
  }


}
