import {Action} from '@ngrx/store';

export const ADD_PET_ACTION = 'ADD_PET_ACTION';

export class AddPetAction implements Action {
  readonly type = ADD_PET_ACTION;
}

export type all = AddPetAction;
