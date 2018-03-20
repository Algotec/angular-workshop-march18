import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';

  constructor(private http: HttpClient) {
  }

  getItems(): Promise<IShopItem[]> {
    return this.http.get<IShopItem[]>(ShopService.baseUrl)
      .toPromise();
  }
}
