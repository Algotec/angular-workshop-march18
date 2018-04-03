import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ShopAdminActions from '../shopAdmin/shop-admin.actions';
import {ShopBackend} from '../shop/shop.backend';
import {concatMap, switchMap} from 'rxjs/operators';
import {AddItemAction, DeleteItemAction, EditItemAction} from './shop-admin.actions';
import {GetShopItemsAction} from '../shop/shop.actions';
import {Go} from '../shared/router.actions';


const reloadAndBackTOShop = switchMap(() => [new GetShopItemsAction(true), new Go({path: ['/shop']})]);

@Injectable()
export class ShopAdminEffectsService {

  @Effect() editItem = this.actions$.pipe(
    ofType(ShopAdminActions.EDIT_ITEM),
    concatMap((action: EditItemAction) => this.shopBackend.editShopItem(action.id, action.item)),
    reloadAndBackTOShop
  );
  @Effect() deleteItem = this.actions$.pipe(
    ofType(ShopAdminActions.DELETE_ITEM),
    concatMap((action: DeleteItemAction) => this.shopBackend.removeItemFromShop(action.id)),
    reloadAndBackTOShop
  );
  @Effect() addItem = this.actions$.pipe(
    ofType(ShopAdminActions.ADD_ITEM),
    concatMap((action: AddItemAction) => this.shopBackend.addItemToShop(action.item)),
    reloadAndBackTOShop
  );


  constructor(private actions$: Actions<ShopAdminActions.all>, private shopBackend: ShopBackend) {
  }
}
