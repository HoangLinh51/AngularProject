import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { ShopComponent } from './shop.component';

const productRoutes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop/:id',
    component: ProductDetailComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'shop/category/:category',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
