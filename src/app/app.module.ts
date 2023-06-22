import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootertopComponent } from './footertop/footertop.component';
import { FooterbottomComponent } from './footerbottom/footerbottom.component';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeModule } from './home/home.module';

import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModeule } from './checkout/checkout.module';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
