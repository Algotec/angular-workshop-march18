import {Action} from '@ngrx/store';
import {PetModel} from './pet.model';

export const ADD_PET = '[PETS] ADD_PET';
export const FEED_PET = 'PETS] FEED_PET';
export const TOGGLE_AWAKE = '[PETS] TOGGLE_AWAKE';

export class AddPetAction implements Action {
  readonly type = ADD_PET;

  constructor(public pet: PetModel) {
  }
}

export class FeedPetAction implements Action {
  readonly type = FEED_PET;

  constructor(public petId: number) {
  }
}

export class ToggleAwakeAction implements Action {
  readonly type = TOGGLE_AWAKE;

  constructor(public petId: number) {
  }
}

export type all = AddPetAction | FeedPetAction;
