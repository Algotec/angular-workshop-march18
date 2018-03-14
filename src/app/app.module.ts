import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PetModule} from './pets/pet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PetModule,
    BrowserModule,
    FormsModule, // notice that this must be included for ngModel to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
