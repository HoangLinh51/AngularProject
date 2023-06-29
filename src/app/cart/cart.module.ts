import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GrossProductComponent } from './gross-product/gross-product.component';
import { InterestedProductComponent } from './interested-product/interested-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { OrtherProductComponent } from './orther-product/orther-product.component';
import { CartTotalsComponent } from './cart-totals/cart-totals.component';
import { CartComponent } from './cart.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CartComponent,
    CartTotalsComponent,
    GrossProductComponent,
    InterestedProductComponent,
    SearchProductComponent,
    OrtherProductComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    CarouselModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CartModule {}
