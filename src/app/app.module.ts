import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PetService} from './pets/pet.service';
import {AppComponent} from './app.component';
import {PetInputComponent} from './pets/pet-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PetInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
