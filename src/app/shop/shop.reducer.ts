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


function ShopReducer(state: IShopState = IntialShopState, action: ShopActions.all): IShopState {
  switch (action.type) {

  }
  return state;
}

export const shopReducer: ActionReducer<IShopState, ShopActions.all> = ShopReducer;
