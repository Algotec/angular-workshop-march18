import {ContainerProducerBase, StoreHelper, UpdateElementModelAction} from '@algotec/ng-store-infra';
import {IAppState} from '../app.reducers';
import {commmonStateSection} from './common.reducer';
import {Injectable} from '@angular/core';
import {IElementModel} from '@algotec/wmdl-webkit';

@Injectable()
export class CommonProducer extends ContainerProducerBase<IAppState> {

  constructor(protected store: StoreHelper<IAppState>) {
    super(store, commmonStateSection);
  }

  updateElementModel(element: IElementModel) {
    this.storeHelper.dispatch(new UpdateElementModelAction(element, commmonStateSection));
  }
}
