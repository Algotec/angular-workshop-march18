import {PetModel} from './pet.model';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../app.reducers';
import {Store} from '@ngrx/store';
import {AddPetAction, FeedPetAction, ToggleAwakeAction} from './pet.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class PetService {
  constructor(private store: Store<IAppState>) {
  }

  public pets$: Observable<PetModel[]> = this.store.select('pets', 'petList');

  addPet(pet: PetModel) {
    this.store.dispatch(new AddPetAction(pet));
  }

  feed(pet: PetModel) {
    this.store.dispatch(new FeedPetAction(pet.id));
  }

  toggleAwake(pet: PetModel) {
    this.store.dispatch(new ToggleAwakeAction(pet.id));

  }
}
