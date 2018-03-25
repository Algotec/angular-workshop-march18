import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LetterSelectorComponent} from './letter-selector.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  providers: [],
  declarations: [LetterSelectorComponent],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [CommonModule, FormsModule, LetterSelectorComponent, MatCardModule, MatListModule,
    MatRippleModule, MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, RouterModule],
})
export class SharedModule {
}
