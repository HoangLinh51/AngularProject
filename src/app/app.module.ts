import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootertopComponent } from './footertop/footertop.component';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModeule } from './checkout/checkout.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { fakeBackendProvider } from './auth/fake-backend';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { ProductDetailModule } from './product-detail/product-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootertopComponent,
    FooterbottomComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    NgOptimizedImage,
    CarouselModule,
    HomeModule,
    ShopModule,
    CartModule,
    CheckoutModeule,
    AuthRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductDetailModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
