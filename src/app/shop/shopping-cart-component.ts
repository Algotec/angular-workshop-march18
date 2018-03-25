import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shopping-cart',
  styles: [`li {
    list-style: repeating-linear-gradient(to left, #17aa46, #5e8fdd, #fefefe)
  }`],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>Shopping Cart</h2>
  <ul>
    <li *ngFor="let item of shoppingCart;let i = index">{{item.title}}
      <button (click)="removeFromCart.emit(i)">X</button>
    </li>

  </ul>
  <span>Total Sum:{{sum}}</span>`
})
export class ShoppingCartComponent {
  @Input() shoppingCart: IShopItem[] = [];
  @Output() removeFromCart = new EventEmitter<number>();

  get sum() {
    // console.log('sum called');
    return this.shoppingCart.reduce((acc, item) => acc += (+item.price), 0);
  }

}
