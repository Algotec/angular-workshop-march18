import {ContainerProducerBase, StoreHelper} from '@algotec/ng-store-infra';
import {IAppState} from '../app.reducers';
import {commmonStateSection} from './common.reducer';
import {Injectable} from '@angular/core';

@Injectable()
export class CommonProducer extends ContainerProducerBase<IAppState> {

  constructor(protected store: StoreHelper<IAppState>) {
    super(store, commmonStateSection);
  }
}
