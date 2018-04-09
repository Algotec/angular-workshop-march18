import {PetModel} from './pet.model';
import {combineReducers, ActionReducer} from '@ngrx/store';
import * as PetActions from './pet.actions';
import {ModelsStateBase, ContainerReducer} from '@algotec/ng-store-infra';
import {ButtonModel, TextBoxModel, ButtonType, UIButtonOptionsModel, UIElementOptionsModel} from '@algotec/wmdl-webkit';

export const petsStateSection = ['pets', 'uiState'];

export const petsStateIdentifier = petsStateSection.join('.');

export class PetUIState extends ModelsStateBase {
}


export const addTextBoxID = 'pets.addTextBox';

export const initialPetUIState = PetUIState.init({
  toolID: 'pets', children: [
    {
      type: TextBoxModel.type,
      elementModel: {
        text: 'Add Pet',
        placeholder: 'Pet Name'
      },
      options: {controlHeight: 'S'} as UIElementOptionsModel,
      toolID: addTextBoxID
    },
    {
      type: ButtonModel.type,
      elementModel: {text: 'Add Pet'} as ButtonModel,
      toolID: 'pets.addButton',
      options: {
        buttonType: ButtonType.RegularButton,
        labelPosition: 'LEFT',
        showIcon: false,
        showText: true,
        prefixWidth: 'HIDDEN',
        controlHeight: 'S'
      } as UIButtonOptionsModel
    }
  ]
});

export interface PetsState {
  petList: PetModel[];
  uiState: PetUIState;
}

export const PetsInitialState: PetsState = {
  uiState: initialPetUIState,
  petList: [
    new PetModel('Avsha'), new PetModel('Abulele'), new PetModel('AvAv'),
    new PetModel('Banian'), new PetModel('Baba'), new PetModel('Basta'),
    new PetModel('Craco'), new PetModel('Charli'), new PetModel('Chompi')]
};

export const UIReducer = ContainerReducer(initialPetUIState, petsStateIdentifier);

export const petsReducer: ActionReducer<PetsState> =
  combineReducers({
    uiState: UIReducer,
    petList: PetsListReducer
  }, PetsInitialState);


function PetsListReducer(state: PetModel[] = PetsInitialState.petList, action: PetActions.all) {
  switch (action.type) {
    case PetActions.ADD_PET:
      state = [...state, action.pet];
      break;

    case PetActions.FEED_PET: {
      const pet = state.find(_pet => _pet.id === action.petId);
      if (pet) {
        pet.feed(); // this should really be immutable in a perfect redux model
        state = [...state];
      }
      break;
    }
    case PetActions.TOGGLE_AWAKE: {
      const pet = state.find(_pet => _pet.id === action.petId);
      if (pet) {
        pet.toggle(); // this should really be immutable in a perfect redux model
        state = [...state];
      }
      break;
    }
  }
  return state;
}
