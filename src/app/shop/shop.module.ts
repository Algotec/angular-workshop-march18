import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ShoppingCartComponent} from './shopping-cart-component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {FormsModule} from '@angular/forms';
import {ShopListComponent} from './shop-list.component';
import {ShopListItemRendererComponent} from './shop-item.compoent';
import {ShopItemDetailsComponent} from './shop-detail.component';
import {shopRoutes} from './shop.routes';

@NgModule({
  providers: [ShopService],
  declarations: [ShopFrontComponent, ShoppingCartComponent, ShopItemDetailsComponent, ShopListComponent,
    ShopListItemRendererComponent, ShopAdminItemEditComponent],
  imports: [SharedModule, RouterModule.forChild(shopRoutes), HttpClientModule, FormsModule],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
