import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IShopItem} from './shop.types';
import {AuthService} from '../userAuth/auth.service';
import {Router} from '@angular/router';
import {ShopService} from './shop.service';

export enum ActionTypes { add, edit, delete}

@Component({
  selector: 'shop-list',
  template: `
    <h3 *ngIf="authService.isLoggedIn">Admin View</h3>
    <mat-list>
      <mat-list-item *ngFor="let item of items">
        <shop-list-item-renderer [item]="item">
          <button mat-icon-button (click)="buyItem(item)">
            <mat-icon>add</mat-icon>
          </button>
          <button *ngIf="authService.isLoggedIn" mat-icon-button (click)="adminAction(item,ActionTypes.edit)">
            <mat-icon>edit</mat-icon>
          </button>
          <button *ngIf="authService.isLoggedIn" mat-icon-button (click)="adminAction(item,ActionTypes.delete)">
            <mat-icon>clear</mat-icon>
          </button>
        </shop-list-item-renderer>
      </mat-list-item>
    </mat-list>
    <button class="addItemBtn" mat-raised-button (click)="adminAction(null,ActionTypes.add)" color="primary" *ngIf="authService.isLoggedIn">
      <mat-icon>add</mat-icon>
      Add Item to shop
    </button>`
})
export class ShopListComponent {
  @Input() items: IShopItem[];
  @Output() purchase = new EventEmitter<IShopItem>();

  ActionTypes = ActionTypes;


  constructor(public authService: AuthService, private router: Router, private shopService: ShopService) {
  }

  adminAction(item: IShopItem, action: ActionTypes) {
    if (action === ActionTypes.edit) {
      this.router.navigate(['shop', 'admin', 'edit', item._id]);
    } else if (action === ActionTypes.delete) {
      this.shopService.removeItemFromShop(item._id);

    } else if (action === ActionTypes.add) {
      this.router.navigate(['shop', 'admin', 'add']);
    }
  }

  buyItem(item) {
    this.purchase.emit(item);

  }
}
