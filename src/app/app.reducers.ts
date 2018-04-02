import {PetsState, petsReducer} from './pets/pets.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {RouterReducerState, routerReducer} from '@ngrx/router-store';
import {RouterStateUrl} from './shared/routerSerializer';

export interface IAppState {
  pets: PetsState;
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<IAppState> = {
  pets: petsReducer,
  router: routerReducer
};
