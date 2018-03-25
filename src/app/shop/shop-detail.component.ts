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
        <img mat-card-avatar [src]="shopService.getRandomImage(item?.title)"/>
      </mat-card-header>
      <mat-card-content>
        <router-outlet></router-outlet>
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

  constructor(private router: Router, private activeRoute: ActivatedRoute, public shopService: ShopService) {
  }

  ngOnInit() {
    this.activeRoute.url.subscribe((e) => console.log(e));
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


  buyItem() {
    this.shopService.addTOCart(this.item);
    this.router.navigate(['/shop']);
  }

  nextItem() {
    this.router.navigate(['/shop', 'detail', this.shopService.getNextId(this.item._id)]);
  }

}
