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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    FormsModule,
    BrowserModule,
    NgOptimizedImage,
    CarouselModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CartModule {}
