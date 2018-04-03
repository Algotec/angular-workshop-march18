import {IShopItem} from './shop.types';
import {ActionReducer} from '@ngrx/store';
import * as ShopActions from './shop.actions';

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
    }
  }
  return state;
}

export const shopReducer: ActionReducer<IShopState, ShopActions.all> = ShopReducer;
