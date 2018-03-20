import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {RouterModule, Routes} from '@angular/router';

export const shopRoutes: Routes = [
  {
    path: 'shop', component: ShopFrontComponent
  }
];

@NgModule({
  providers: [ShopService],
  declarations: [ShopFrontComponent],
  imports: [SharedModule, RouterModule.forChild(shopRoutes)],
  exports: [ShopFrontComponent],
})
export class ShopModule {
}
