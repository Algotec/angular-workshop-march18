import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';
  private shoppingCart: IShopItem[] = [];

  constructor(private http: HttpClient) {
  }

  getItems(): Promise<IShopItem[]> {
    return this.http.get<IShopItem[]>(ShopService.baseUrl)
      .toPromise();
  }

  addTOCart(item: IShopItem) {
    this.shoppingCart = [...this.shoppingCart, item];
  }

  removeFromCart(index: number) {
    this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];
  }

  getCart() {
    return this.shoppingCart;
  }
}
