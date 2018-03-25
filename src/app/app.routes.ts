import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/pets', pathMatch: 'full'},
  {path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
];
