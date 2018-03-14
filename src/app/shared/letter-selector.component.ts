import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'letter-selector',
  styles: [`ul {
    list-style: none;
  }`, `li {
    display: inline-block;
    padding: 0 5px;
  }`, `.selected {
    background-color: lightblue
  }`],
  template: `
    <ul>
      <li>
        <button [class.selected]="letterSelected === ''" (click)="selectLetter('')">Show All</button>
      </li>
      <li *ngFor="let letter of letters">
        <button [class.selected]="letter === letterSelected" (click)="selectLetter(letter)">{{letter}}</button>
      </li>
    </ul>
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
