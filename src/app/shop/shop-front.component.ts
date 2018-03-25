import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-front',
  styles: [`
    .shop-container {
      display: grid;
      grid-template-columns: 1fr 200px;
    }

    `],
  template: `<h1>Shop</h1>
  <section class="shop-container">
    <shop-list [items]="items" (purchase)="shopService.addTOCart($event)"></shop-list>
    <shopping-cart [shoppingCart]="shopService.getCart()" (removeFromCart)="shopService.removeFromCart($event)"></shopping-cart>
  </section>`
})
export class ShopFrontComponent implements OnInit {

  items: IShopItem[];


  constructor(public shopService: ShopService) {
  }

  ngOnInit() {
    this.shopService.getItems().then((items) => {
      this.items = items;
    });
  }
}
