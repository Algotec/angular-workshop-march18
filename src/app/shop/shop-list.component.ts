import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list',
  template: `
    <ul>
      <li *ngFor="let item of items">
        <shop-list-item-renderer [item]="item">
          <button
          (click)="buyItem(item)">BUY</button>
        </shop-list-item-renderer>
      </li>
    </ul>`
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  buyItem(item) {
    this.purchase.emit(item);

  }
}
