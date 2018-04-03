import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IShopItem} from './shop.types';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ShopBackend} from './shop.backend';

@Injectable()
export class ShopItemResolver implements Resolve<IShopItem> {
  constructor(private shopBackend: ShopBackend) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IShopItem>|Promise<IShopItem>|IShopItem {
    let id = route.params['id'];
    return this.shopBackend.get(id);
  }

}
