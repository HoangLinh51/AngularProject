import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BestproductComponent } from './bestproduct/bestproduct.component';
import { BrandComponent } from './brand/brand.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { PromoComponent } from './promo/promo.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './newproduct/product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PromoComponent,
    NewproductComponent,
    BrandComponent,
    BestproductComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    NgOptimizedImage,
    CarouselModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
