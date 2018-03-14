import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PetService} from './pets/pet.service';
import {AppComponent} from './app.component';
import {PetInputComponent} from './pets/pet-input.component';
import {PetListComponent} from './pets/pet-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetInputComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // notice that this must be included for ngModel to work
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
