import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { OrtherProductComponent } from '../checkout/orther-product/orther-product.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    OrtherProductComponent,
    ShippingAddressComponent,
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
