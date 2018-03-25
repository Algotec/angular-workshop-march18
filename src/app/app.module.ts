import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetsModule} from './pets/pets.module';
import {SharedModule} from './shared/shared.module';
import {TimeModule} from './time/time.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {UserAuthModule} from './userAuth/user-auth.module';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    PetsModule,
    TimeModule,
    UserAuthModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
