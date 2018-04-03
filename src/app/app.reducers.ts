import {petsReducer, PetsState} from './pets/pets.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './shared/routerSerializer';
import {IShopState, shopReducer} from './shop/shop.reducer';

export interface IAppState {
  pets: PetsState;
  shop: IShopState,
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<IAppState> = {
  pets: petsReducer,
  shop: shopReducer,
  router: routerReducer
};
