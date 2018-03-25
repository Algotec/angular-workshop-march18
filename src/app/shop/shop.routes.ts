import {Route} from '@angular/router';
import {ShopFrontComponent} from './shop-front.component';
import {ShopItemDetailsComponent} from './shop-detail.component';
import {ShopAdminItemEditComponent} from '../shopAdmin/shop-admin-item-edit.component';
import {AuthGuard} from '../userAuth/auth.guard';
import {ShopItemResolver} from './shop-item.resolver';

export const shopRoutes: Route[] = [
  {
    path: 'shop', children: [
      {path: '', component: ShopFrontComponent},
      {path: 'detail/:id', component: ShopItemDetailsComponent, resolve: {shopItem: ShopItemResolver}},
      {
        path: 'admin', canActivate: [AuthGuard], children: [
          {path: 'edit/:id', component: ShopAdminItemEditComponent, resolve: {shopItem: ShopItemResolver}},
          {path: 'add', component: ShopAdminItemEditComponent}
        ]
      }
    ]
  }
];
