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
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h1>Shop</h1></mat-card-title>
      </mat-card-header>
      <mat-card-content class="shop-container">
        <shop-list [items]="items" (purchase)="shopService.addTOCart($event)"></shop-list>
        <shopping-cart [shoppingCart]="shopService.getCart()" (removeFromCart)="shopService.removeFromCart($event)"></shopping-cart>
      </mat-card-content>
    </mat-card>\``
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
