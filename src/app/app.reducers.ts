import {petsReducer, PetsState} from './pets/pets.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './shared/routerSerializer';
import {IShopState, shopReducer} from './shop/shop.reducer';
import {InjectionToken} from '@angular/core';

export interface IAppState {
  pets: PetsState;
  shop: IShopState;
  router: RouterReducerState<RouterStateUrl>;
}

export const APP_REDUCERS = new InjectionToken<typeof appReducers>('AppReducers');

export function appReducers(): ActionReducerMap<IAppState> {
  return {
    pets: petsReducer,
    shop: shopReducer,
    router: routerReducer
  };
}
