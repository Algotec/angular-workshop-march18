import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LetterSelectorComponent } from './letter-selector.component';

@NgModule({
  providers: [],
  declarations: [LetterSelectorComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, LetterSelectorComponent],
})
export class SharedModule {
}
