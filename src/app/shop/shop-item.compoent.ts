import {Component, Input} from '@angular/core';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list-item-renderer',
  template: `
    <ng-content></ng-content>
    {{item.title}} - <span>{{item.price | currency:'USD':true}}</span>`
})
export class ShopListItemRendererComponent {
  @Input() item: IShopItem;
}
