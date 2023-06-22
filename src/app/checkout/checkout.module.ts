import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { DiferentAddressComponent } from './diferent-address/diferent-address.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { CheckoutComponent } from './checkout.component';
import { SearchProductComponent } from './search-product/search-product.component';

import { SimilarProductComponent } from './similar-product/similar-product.component';

@NgModule({
  declarations: [
    SearchProductComponent,
    SimilarProductComponent,
    BillingDetailsComponent,
    DiferentAddressComponent,
    PaymentMethodsComponent,
    YourOrderComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage, CarouselModule],
  providers: [],
  bootstrap: [],
})
export class CheckoutModeule {}