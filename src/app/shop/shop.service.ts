import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable()
export class ShopService {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';
  private shoppingCart: IShopItem[] = [];
  private items: IShopItem[] = [];

  constructor(private http: HttpClient) {
    this.getItems();
  }

  getItems(): Promise<IShopItem[]> {
    return this.http.get<IShopItem[]>(ShopService.baseUrl)
      .pipe(tap((items) => {
        this.items = items;
      }))
      .toPromise();
  }

  get(id: number) {
    return this.http.get<IShopItem>(ShopService.baseUrl + '/' + id)
      .toPromise();
  }

  addTOCart(item: IShopItem) {
    this.shoppingCart = [...this.shoppingCart, item];
  }

  addItemToShop(item: IShopItem) {
    return this.http.post(ShopService.baseUrl, item).toPromise();
  }

  editShopItem(id, data) {
    return this.http.put(ShopService.baseUrl + '/' + id, {...data, _id: id}).toPromise();
  }

  removeItemFromShop(id) {
    return this.http.delete(ShopService.baseUrl + '/' + id).toPromise().then(() => this.getItems());
  }

  removeFromCart(index: number) {
    this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];
  }

  getNextId(_id) {
    const index = this.items.findIndex((i) => _id === i._id);
    return (index === this.items.length - 1) ? this.items[0]._id : this.items[index + 1]._id;
  }

  getCart() {
    return this.shoppingCart;
  }

  getRandomImage(title = 'pets$') {
    title = title.split(' ')[0].toLowerCase();
    return `http://loremflickr.com/100/100/${title}`;
  }
}
