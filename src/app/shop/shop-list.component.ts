import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of items">
        <shop-list-item-renderer [item]="item">
          <button mat-icon-button (click)="buyItem(item)"><mat-icon>add</mat-icon></button>
        </shop-list-item-renderer>
      </mat-list-item>
    </mat-list>`
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  buyItem(item) {
    this.purchase.emit(item);

  }
}
