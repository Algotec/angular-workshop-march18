import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from '../shop/shop.service';
import {IShopItem} from '../shop/shop.types';

@Component({
  selector: 'shop-admin-item-edit',
  styles: [`
    form {
      max-width: 400px;
    }

    mat-form-field {
      width: 100%;
    }`],
  template: `
    <mat-card>
      <mat-card-title><h1>Store Admin</h1></mat-card-title>
      <mat-card-content>
        <form novalidate #form="ngForm" (ngSubmit)="onSubmit(form.value)">
          <input type="hidden" *ngIf="isEdit" [ngModel]="item._id" name="_id"/>
          <mat-form-field>
            <input matInput placeholder='Title' required [ngModel]="item.title" name="title"/>
          </mat-form-field>
          <mat-form-field>
            <span mat-prefix>$&nbsp;</span>
            <input matInput placeholder='Price' name="price" required [ngModel]="item.price" type="number"/>
          </mat-form-field>
          <button mat-raised-button type="submit">{{isEdit ? 'Update' : 'Add'}}</button>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class ShopAdminItemEditComponent implements OnInit {
  isEdit: boolean;
  item: Partial<IShopItem> = {};

  constructor(private shopService: ShopService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  onSubmit(formValue) {
    let promise: Promise<any>;
    if (this.isEdit) {
      promise = this.shopService.editShopItem(this.item._id, formValue);
    } else {
      promise = this.shopService.addItemToShop(formValue);

    }
    promise.then(() => {
      this.router.navigateByUrl('/shop');
    });

  }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    if (typeof id !== 'undefined') {
      this.shopService.get(id).then((item: IShopItem) => {
        this.item = item;
        this.isEdit = true;
      });
    }


  }
}
