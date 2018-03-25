import {Component, Input} from '@angular/core';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list-item-renderer',
  styles: [`a {
    color: #1dffab;
  }`],
  template: `
    <ng-content></ng-content>
    <a [routerLink]="['detail',item._id]">{{item.title}} - <span>{{item.price | currency:'USD':'symbol'}}</span></a>`
})
export class ShopListItemRendererComponent {
  @Input() item: IShopItem;
}
