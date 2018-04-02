import {PetModel} from './pet.model';
import {ActionReducer} from '@ngrx/store';
import * as PetActions from './pet.actions';

export interface PetsState {
  petList: PetModel[];
}

export const petsReducer: ActionReducer<PetsState> = function PetsReducer(state: PetsState, Action: PetActions.all) {

  return state;
};
