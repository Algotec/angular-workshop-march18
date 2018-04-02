import {PetsState, petsReducer} from './pets/pets.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface IAppState {
  pets: PetsState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  pets: petsReducer
};
