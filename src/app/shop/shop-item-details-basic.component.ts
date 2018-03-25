import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IShopItem} from './shop.types';

@Component({
  selector: `shop-item-details-basic`,
  template: `
    <button mat-raised-button color='warn' (click)="goToExtra()">Show extra details</button>`
})
export class ShopItemBasicComponent implements OnInit {
  item: IShopItem;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  goToExtra() {
    this.router.navigate(['./extra'], {relativeTo: this.route.parent, skipLocationChange: true});
  }

  ngOnInit() {
    this.item = this.route.parent.snapshot.data['shopItem']; // speak about data inheritance
  }

}
