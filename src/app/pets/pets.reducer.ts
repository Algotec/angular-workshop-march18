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
      state = {...state, ...{petList: [...state.petList, action.pet]}};
      break;

    case PetActions.FEED_PET: {
      const pet = state.petList.find(_pet => _pet.id === action.petId);
      if (pet) {
        pet.feed(); // this should really be immutable in a perfect redux model
        state = {...state, ...{petList: [...state.petList]}};
      }
      break;
    }
    case PetActions.TOGGLE_AWAKE: {
      const pet = state.petList.find(_pet => _pet.id === action.petId);
      if (pet) {
        pet.toggle(); // this should really be immutable in a perfect redux model
        state = {...state, ...{petList: [...state.petList]}};
      }
      break;
    }
  }
  return state;
};
