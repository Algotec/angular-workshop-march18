import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ShopActions from './shop.actions';
import {GetShopItemsAction, ShopItemsArrivedAction} from './shop.actions';
import {ShopBackend} from './shop.backend';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class ShopEffectsService {

  @Effect() loadItems = this.actions$.pipe(
    ofType(ShopActions.GET_ITEMS),
    switchMap((action: GetShopItemsAction) => this.shopBackend.getItems(action.force)),
    map(items => new ShopItemsArrivedAction(items))
  );


  constructor(private actions$: Actions<ShopActions.all>, private shopBackend: ShopBackend) {
  }
}
