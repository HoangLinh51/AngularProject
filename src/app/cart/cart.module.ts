import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GrossProductComponent } from './gross-product/gross-product.component';
import { OrtherProductComponent } from './orther-product/orther-product.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent, GrossProductComponent, OrtherProductComponent],
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
