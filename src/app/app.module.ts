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
import {StoreModule} from '@ngrx/store';
import {APP_REDUCERS, appReducers} from './app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterStateSerializer, StoreRouterConnectingModule,} from '@ngrx/router-store';
import {CustomRouterStateSerializer} from './shared/routerSerializer';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './shared/router.effects';
import {TranslateModule} from '@ngx-translate/core';
// global styles (added as a separate stylesheet to the head of the page)
import '@algotec/themes/global.styles.scss';
import {DynamicModule} from 'ng-dynamic-component';
import {NgDragDropModule} from 'ng-drag-drop';

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
    MatToolbarModule,
    StoreModule.forRoot(APP_REDUCERS),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'Algotec Angular Workshop demo',
      logOnly: environment.production,
    }),
    TranslateModule.forRoot(), // used by all UI-Elements
    DynamicModule.withComponents([]), // needed for forms, grid
    NgDragDropModule.forRoot() // needed for button DND behaviour
  ],
  providers: [
    {provide: APP_REDUCERS, useFactory: appReducers},
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
