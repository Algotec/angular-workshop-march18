import {PetModel} from './pet.model';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../app.reducers';
import {AddPetAction, FeedPetAction, ToggleAwakeAction} from './pet.actions';
import {Injectable} from '@angular/core';
import {ContainerProducerBase, StoreHelper, UpdateElementModelAction} from '@algotec/ng-store-infra';
import {petsStateSection} from './pets.reducer';

@Injectable()
export class PetService extends ContainerProducerBase<IAppState> {

  constructor(private store: StoreHelper<IAppState>) {
    super(store, ...petsStateSection);
  }

  public pets$: Observable<PetModel[]> = this.store.select('pets', 'petList');

  updateTextBoxValue(toolID: string, value: string): void {
    this.storeHelper.dispatch(new UpdateElementModelAction({toolID, value}, this.stateIdentifier));
  }

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
