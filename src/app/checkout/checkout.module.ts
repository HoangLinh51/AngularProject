import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutComponent } from './checkout.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { OrtherProductComponent } from '../checkout/orther-product/orther-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchProductComponent,
    BillingDetailsComponent,
    CheckoutComponent,
    OrtherProductComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgOptimizedImage,
    CarouselModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [FormsModule],
})
export class CheckoutModeule {}
