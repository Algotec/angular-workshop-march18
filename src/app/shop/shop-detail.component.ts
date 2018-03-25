import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from './shop.service';
import {IShopItem} from './shop.types';

@Component({
  selector: 'shop-detail',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{item?.title}}</mat-card-title>
        <img mat-card-avatar [src]="getRandomImage()"/>
      </mat-card-header>
      <mat-card-content>
        <img mat-card-lg-image [src]="getRandomImage()">
        <h3>{{item?.price | currency:'USD':true}}</h3>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="buyItem()">Buy</button>
      </mat-card-actions>
    </mat-card>`
})
export class ShopItemDetailsComponent implements OnInit {
  item: IShopItem;

  constructor(private activeRoute: ActivatedRoute, private shopService: ShopService, private router: Router) {
  }

  ngOnInit() {
    this.shopService.get(this.activeRoute.snapshot.params['id']).then(item => {
      this.item = item;
    });
  }

  getRandomImage() {
    let title = 'animals';
    if (this.item) {
      title = this.item.title.split(' ')[0].toLowerCase();
    }
    return `http://loremflickr.com/100/100/${title}`;
  }

  buyItem() {
    this.shopService.addTOCart(this.item);
    this.router.navigate(['/shop']);
  }

}
