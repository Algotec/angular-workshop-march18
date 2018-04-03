import {IShopItem} from './shop.types';
import {ActionReducer, createFeatureSelector, createSelector} from '@ngrx/store';
import * as ShopActions from './shop.actions';
import {IAppState} from '../app.reducers';

export interface IShopState {
  items: IShopItem[];
  shoppingCart: IShopItem[];
}

export const IntialShopState: IShopState = {
  items: [],
  shoppingCart: []
};

function findItem(id: any, list: any[], idProp = '_id') {
  return list.find(item => item[idProp] === id);
}

function immutableSplice(array: any[], indexToRemove: number) {
  return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
}


function ShopReducer(state: IShopState = IntialShopState, action: ShopActions.all): IShopState {

  switch (action.type) {
    case ShopActions.ITEMS_ARRIVED: {
      state = Object.assign({}, state, {items: action.items});
      break;
    }
    case ShopActions.ADD_TO_CART: {
      const itemToAdd = findItem(action.id, state.items);
      if (itemToAdd) {
        state = {...state, ...{shoppingCart: [...state.shoppingCart, itemToAdd]}};
      }
      break;
    }
    case ShopActions.REMOVE_FROM_CART: {
      state = {...state, ...{shoppingCart: immutableSplice(state.shoppingCart, action.index)}};
      break;
    }

  }
  return state;
}

export const shopReducer: ActionReducer<IShopState, ShopActions.all> = ShopReducer;

const shopSelector = createFeatureSelector<IShopState>('shop');
export const shoppingCartSum = createSelector(
  shopSelector,
  (shopState: IShopState) => {
    console.log('sum called');
    return shopState.shoppingCart.reduce((acc, item) => acc += (+item.price), 0);
  }
);

