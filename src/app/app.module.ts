import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PetsModule} from './pets/pets.module';
import {SharedModule} from './shared/shared.module';
import {ShopModule} from './shop/shop.module';
import {TimeModule} from './time/time.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    ShopModule,
    PetsModule,
    TimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
