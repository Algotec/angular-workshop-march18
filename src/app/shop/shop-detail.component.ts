import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from './shop.service';
import {IShopItem} from './shop.types';
import {finalize, map} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';

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
        <h3>{{item?.price | currency:'USD':'symbol'}}</h3>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="buyItem()">Buy</button>
        <button mat-raised-button (click)="nextItem()">Next Item</button>
      </mat-card-actions>
    </mat-card>`
})
export class ShopItemDetailsComponent implements OnInit, OnDestroy {
  item: IShopItem;
  private paramsSubscriber: Subscription;

  constructor(private activeRoute: ActivatedRoute, private shopService: ShopService, private router: Router) {
  }

  ngOnInit() {
    this.paramsSubscriber = this.activeRoute.data.pipe(
      map((data) => data['shopItem']),
    ).subscribe((item) => {
        this.item = item;
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscriber) {
      this.paramsSubscriber.unsubscribe();
    }
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

  nextItem() {
    this.router.navigate(['/shop', 'detail', this.shopService.getNextId(this.item._id)]);
  }

}
