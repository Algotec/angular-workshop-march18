import {IShopItem} from './shop.types';

import StoreItems from './shop-items.data';

export class ShopService {
  getItems(): Promise<IShopItem[]> {
    return Promise.resolve(StoreItems);
  }
}
