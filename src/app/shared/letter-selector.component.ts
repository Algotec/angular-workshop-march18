import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'letter-selector',
  styles: [`
    mat-list.mat-list[dense] mat-list-item.mat-list-item {
      display: inline-block;
    }

    ::ng-deep mat-list.mat-list[dense] mat-list-item.mat-list-item .mat-list-item-content {
      padding: 0 5px;
    }

    button.mat-stroked-button {
      min-width: 25px;
      color: white;
    }

    button.selected {
      background-color: lightblue
    }`],
  template: `
    <mat-list dense>
      <mat-list-item>
        <button mat-stroked-button [class.selected]="letterSelected === ''" (click)="selectLetter('')">Show All</button>
      </mat-list-item>
      <mat-list-item *ngFor="let letter of letters">
        <button mat-stroked-button [class.selected]="letter === letterSelected" (click)="selectLetter(letter)">{{letter}}</button>
      </mat-list-item>
    </mat-list>
  `
})
export class LetterSelectorComponent {
  @Output('select') selectEmitter = new EventEmitter(); // inputs/outputs can be renamed
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  @Input('letter') letterSelected = '';

  selectLetter(letter: string) {
    this.letterSelected = letter;
    this.selectEmitter.emit(this.letterSelected);
  }
}
