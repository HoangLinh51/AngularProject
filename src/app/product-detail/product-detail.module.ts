import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecriptionProductComponent } from './decription-product/decription-product.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SimiliarProductComponent } from './similiar-product/similiar-product.component';
import { ProductDetailComponent } from './product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RelatedProductComponent,
    DecriptionProductComponent,
    SearchProductComponent,
    SimiliarProductComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, NgxPaginationModule, RouterModule, BrowserModule],
})
export class ProductDetailModule {}
