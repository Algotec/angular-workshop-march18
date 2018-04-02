import {PetModel} from './pet.model';
import {ActionReducer} from '@ngrx/store';
import * as PetActions from './pet.actions';

export interface PetsState {
  petList: PetModel[];
}

export const PetsInitialState: PetsState = {
  petList: [
    new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')]
};

export const petsReducer: ActionReducer<PetsState> = function PetsReducer(state: PetsState = PetsInitialState, action: PetActions.all) {
  switch (action.type) {
    case PetActions.ADD_PET:
      state.petList = [...state.petList, action.pet];
      break;
  }
  return state;
};
