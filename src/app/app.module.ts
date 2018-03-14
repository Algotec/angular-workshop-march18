import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetsModule} from './pets/pets.module';
import {SharedModule} from './shared/shared.module';
import {TimeModule} from './time/time.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PetsModule,
    TimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
