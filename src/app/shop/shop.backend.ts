import {IShopItem} from './shop.types';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay, takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../app.reducers';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShopBackend {
  private static readonly baseUrl = 'http://localhost:3003/data/petShop';
  private cache$;
  private reload$ = new Subject<null>();

  constructor(private http: HttpClient, private store: Store<IAppState>) {
  }

  getItems(force = false): Observable<IShopItem[]> {
    if (force) {
      this.reload$.next();
      this.cache$ = null;
    }
    if (!this.cache$) {
      this.cache$ = this.http.get<IShopItem[]>(ShopBackend.baseUrl).pipe(
        shareReplay(1),
        takeUntil(this.reload$));
    }
    return this.cache$;
  }

  get(id: number) {
    return this.http.get<IShopItem>(ShopBackend.baseUrl + '/' + id);
  }

  addItemToShop(item: IShopItem) {
    return this.http.post(ShopBackend.baseUrl, item);
  }

  editShopItem(id, data) {
    return this.http.put(ShopBackend.baseUrl + '/' + id, {...data, _id: id});
  }

  removeItemFromShop(id) {
    return this.http.delete(ShopBackend.baseUrl + '/' + id);
  }
}
