import {IShopItem} from './shop.types';
import {Action} from '@ngrx/store';
import * as ShopAdminAction from '../shopAdmin/shop-admin.actions';

export const GET_ITEMS = '[SHOP] GET_ITEMS';
export const ITEMS_ARRIVED = '[SHOP] ITEMS_ARRIVED';
export const ADD_TO_CART = '[SHOP] ADD_TO_CART';
export const REMOVE_FROM_CART = '[SHOP] REMOVE_FROM_CART';
export const SERVER_ERROR = '[SHOP] SERVER_ERROR';

export class ServerErrorAction {
  readonly type = SERVER_ERROR;

  constructor(public error?: Error) {
  }
}

export class GetShopItemsAction implements Action {
  readonly type = GET_ITEMS;

  constructor(public force?: boolean) {
  }
}

export class ShopItemsArrivedAction implements Action {
  readonly type = ITEMS_ARRIVED;

  constructor(public items: IShopItem[]) {
  }
}

export class AddToCartAction implements Action {
  readonly type = ADD_TO_CART;

  constructor(public id: number) {
  }
}

export class RemoveFromCartAction implements Action {
  readonly type = REMOVE_FROM_CART;

  constructor(public index: number) {
  }
}


export type shopUserActions = GetShopItemsAction | ShopItemsArrivedAction | AddToCartAction | RemoveFromCartAction | ServerErrorAction ;

export type all = shopUserActions | ShopAdminAction.all;
