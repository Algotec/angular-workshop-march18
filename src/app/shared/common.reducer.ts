import {ContainerReducer, ModelsStateBase} from '@algotec/ng-store-infra';

export const commmonStateSection = 'common';

export class CommonState extends ModelsStateBase {
}

const initialCommonState = CommonState.init({toolID: 'demoApp'});

const baseReducer = ContainerReducer(initialCommonState, commmonStateSection);

export function commonReducer(state = initialCommonState, action) {
  switch (action.type) {
    // your own stuff here
  }
  return baseReducer(state, action);
}
