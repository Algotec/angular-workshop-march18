import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddToCartAction, GetShopItemsAction, RemoveFromCartAction} from './shop.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.reducers';
import {take} from 'rxjs/operators';
import {AddItemAction, DeleteItemAction, EditItemAction} from '../shopAdmin/shop-admin.actions';
import {shoppingCartSum} from './shop.reducer';


@Injectable()
export class ShopService {
  public readonly cart$ = this.store.select('shop', 'shoppingCart');
  public readonly items$ = this.store.select('shop', 'items');
  public readonly shoppingCartSum$ = this.store.select(shoppingCartSum);

  constructor(private http: HttpClient, private store: Store<IAppState>) {
  }

  getItems() {
    this.store.dispatch(new GetShopItemsAction());
  }

  addTOCart(item: IShopItem) {
    this.store.dispatch(new AddToCartAction(item._id));
  }


  removeFromCart(index: number) {
    this.store.dispatch(new RemoveFromCartAction(index));
  }

  getNextId(_id) {
    const items = this.syncGetStoreItems();
    const index = items.findIndex((i) => _id === i._id);
    return (index === items.length - 1) ? items[0]._id : items[index + 1]._id;
  }

  private syncGetStoreItems(): IShopItem[] {
    let items;
    this.items$.pipe(take(1)).subscribe((_items) => {
      items = _items;
    });
    return items;
  }

  getRandomImage(title = 'pets$') {
    title = title.split(' ')[0].toLowerCase();
    return `http://loremflickr.com/100/100/${title}`;
  }

  // admin methods
  addItemToShop(item: IShopItem): void {
    this.store.dispatch(new AddItemAction(item));
  }

  editShopItem(id, data): void {
    this.store.dispatch(new EditItemAction(id, data));
  }

  removeItemFromShop(id): void {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
