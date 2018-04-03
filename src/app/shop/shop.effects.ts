import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ShopActions from './shop.actions';
import {GetShopItemsAction, ServerErrorAction, ShopItemsArrivedAction} from './shop.actions';
import {ShopBackend} from './shop.backend';
import {map, switchMap, catchError, retry, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

export const generalServerErrorHandler = catchError((e) => of(new ServerErrorAction(e)));

@Injectable()
export class ShopEffectsService {

  @Effect() loadItems = this.actions$.pipe(
    ofType(ShopActions.GET_ITEMS),
    switchMap((action: GetShopItemsAction) => this.shopBackend.getItems(action.force).pipe(retry(2))),
    map(items => new ShopItemsArrivedAction(items)),
    generalServerErrorHandler
  );


  @Effect({dispatch: false}) errorHandler = this.actions$.pipe(
    ofType(ShopActions.SERVER_ERROR),
    tap((action: ServerErrorAction) => {
      console.log('we have some inconvenience :', action.error);
    })
  );


  constructor(private actions$: Actions<ShopActions.all>, private shopBackend: ShopBackend) {
  }
}
