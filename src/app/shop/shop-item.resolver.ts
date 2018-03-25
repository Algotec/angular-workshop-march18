import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {IShopItem} from './shop.types';
import {Observable} from 'rxjs';
import {ShopService} from './shop.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ShopItemResolver implements Resolve<IShopItem> {
  constructor(private shopService: ShopService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IShopItem>|Promise<IShopItem>|IShopItem {
    let id = route.params['id'];
    return this.shopService.get(id);
  }

}
