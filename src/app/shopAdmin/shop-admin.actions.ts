import {Action} from '@ngrx/store';
import {IShopItem} from '../shop/shop.types';

export const ADD_ITEM = '[SHOP_ADMIN] ADD_ITEM';
export const EDIT_ITEM = '[SHOP_ADMIN] EDIT_ITEM';
export const DELETE_ITEM = '[SHOP_ADMIN] DELETE_ITEM';


export class AddItemAction implements Action {
  readonly type = ADD_ITEM;

  constructor(public item: IShopItem) {
  }
}

export class DeleteItemAction implements Action {
  readonly type = DELETE_ITEM;

  constructor(public id: number) {
  }
}

export class EditItemAction implements Action {
  readonly type = EDIT_ITEM;

  constructor(public id: number, public item: Partial<IShopItem>) {
  }
}

export type all = AddItemAction | DeleteItemAction | EditItemAction;
