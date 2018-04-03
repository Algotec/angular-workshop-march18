import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {RouterModule} from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart-component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {FormsModule} from '@angular/forms';
import {ShopListComponent} from './shop-list.component';
import {ShopListItemRendererComponent} from './shop-item.compoent';
import {ShopItemDetailsComponent} from './shop-detail.component';
import {shopRoutes} from './shop.routes';
import {ShopItemResolver} from './shop-item.resolver';
import {ShopItemExtraComponent} from './shop-item-details-extra.component';
import {ShopItemBasicComponent} from './shop-item-details-basic.component';
import {ShopEffectsService} from './shop.effects';
import {EffectsModule} from '@ngrx/effects';
import {ShopBackend} from './shop.backend';
import {ShopAdminEffectsService} from '../shopAdmin/shop-admin.effects';

@NgModule({
  providers: [ShopService, ShopItemResolver, ShopBackend],
  declarations: [ShopFrontComponent, ShoppingCartComponent, ShopItemDetailsComponent, ShopListComponent,
    ShopListItemRendererComponent, ShopAdminItemEditComponent, ShopItemExtraComponent, ShopItemBasicComponent],
  imports: [SharedModule, RouterModule.forChild(shopRoutes), FormsModule, EffectsModule.forFeature([ShopEffectsService, ShopAdminEffectsService])],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
