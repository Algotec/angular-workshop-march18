import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetailsComponent} from './shop-detail.component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {AuthGuard} from '../userAuth/auth.guard';
import {ShopItemResolver} from './shop-item.resolver';
import {ShopItemBasicComponent} from './shop-item-details-basic.component';
import {ShopItemExtraComponent} from './shop-item-details-extra.component';
export const shopRoutes: Route[] = [
  {
    path: '', children: [
      {path: '', component: ShopFrontComponent},
      {path: 'detail/:id', component: ShopItemDetailsComponent, resolve: {shopItem: ShopItemResolver},
        children: [
          {path: '', component: ShopItemBasicComponent},
          {path: 'extra', component: ShopItemExtraComponent}
        ]
      },
      {
        path: 'admin', canActivate: [AuthGuard], children: [
          {path: 'edit/:id', component: ShopAdminItemEditComponent, resolve: {shopItem: ShopItemResolver}},
          {path: 'add', component: ShopAdminItemEditComponent}
        ]
      }
    ]
  }
];
