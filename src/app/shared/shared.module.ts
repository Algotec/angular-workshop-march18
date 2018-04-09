import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LetterSelectorComponent} from './letter-selector.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {EqualValidator} from 'app/shared/validateEqual.directive';
import {ButtonModule, TextBoxModule, UIWebkitFormsModule, HelpersModule} from '@algotec/ui-elements-webkit';
import {CommonProducer} from 'app/shared/common.producer';
import {NGStoreInfraModule} from '@algotec/ng-store-infra';

@NgModule({
  providers: [CommonProducer],
  declarations: [LetterSelectorComponent, EqualValidator],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [CommonModule, ButtonModule, HelpersModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, LetterSelectorComponent, MatCardModule,
    MatListModule, MatRippleModule, MatButtonModule, MatMenuModule, MatIconModule,
    MatInputModule, MatFormFieldModule, RouterModule, EqualValidator, TextBoxModule, NGStoreInfraModule, UIWebkitFormsModule],
})
export class SharedModule {
}
