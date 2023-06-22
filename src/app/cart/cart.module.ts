import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GrossProductComponent } from './gross-product/gross-product.component';
import { InterestedProductComponent } from './interested-product/interested-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SimilarProductComponent } from './similar-product/similar-product.component';
import { CartTotalsComponent } from './cart-totals/cart-totals.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    CartComponent,
    CartTotalsComponent,
    GrossProductComponent,
    InterestedProductComponent,
    SearchProductComponent,
    SimilarProductComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage, CarouselModule],
  providers: [],
  bootstrap: [],
})
export class CartModule {}
