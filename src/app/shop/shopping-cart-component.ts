import {Component, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter, ViewChild} from '@angular/core';
import {IShopItem} from './shop.types';
import {MatRipple} from '@angular/material/core';

@Component({
  selector: 'shopping-cart',
  styles: [`mat-list[dense] /deep/ .mat-list-item {
    padding-left: 0;
    height: 25px;
  }`],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card mat-ripple>
      <mat-card-header>
        <mat-icon mat-card-avatar>shopping basket</mat-icon>
        <mat-card-title>Shopping Cart
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-list dense>
          <mat-list-item *ngFor="let item of shoppingCart;let i = index">
            <button mat-icon-button color="warn" (click)="removeFromCart.emit(i)">
              <mat-icon>clear</mat-icon>
            </button>
            {{item.title}}
          </mat-list-item>
        </mat-list>
        <mat-card-footer>Total Sum:{{sum}}</mat-card-footer>
      </mat-card-content>
    </mat-card>`
})
export class ShoppingCartComponent implements OnChanges {
  @Input() shoppingCart: IShopItem[] = [];
  @Input() sum: number;
  @Output() removeFromCart = new EventEmitter<number>();

  @ViewChild(MatRipple) ripple;


  ngOnChanges(changes) {
    if (changes.shoppingCart) {
      this.ripple.launch(100, 50);
    }
  }
}
