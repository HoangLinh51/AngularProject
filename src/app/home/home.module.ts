import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

import { BestproductComponent } from './bestproduct/bestproduct.component';
import { BrandComponent } from './brand/brand.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { PromoComponent } from './promo/promo.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './newproduct/product/product.component';
import { TopSellersComponent } from './bestproduct/top-sellers/top-sellers.component';
import { RecentlyViewedComponent } from './bestproduct/recently-viewed/recently-viewed.component';
import { TopNewComponent } from './bestproduct/top-new/top-new.component';

@NgModule({
  declarations: [
    PromoComponent,
    NewproductComponent,
    BrandComponent,
    BestproductComponent,
    HomeComponent,
    ProductComponent,
    TopSellersComponent,
    RecentlyViewedComponent,
    TopNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
