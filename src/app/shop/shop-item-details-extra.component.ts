import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IShopItem} from './shop.types';
import {ShopService} from './shop.service';

@Component({
  selector: `shop-item-details-basic.component`,
  template: `
    <img mat-card-lg-image [src]="shopService.getRandomImage(item.title)">`
})
export class ShopItemExtraComponent implements OnInit {
  item: IShopItem;

  constructor(private route: ActivatedRoute, public shopService: ShopService) {

  }

  ngOnInit() {
    this.item = this.route.parent.snapshot.data['shopItem'];
  }

}
