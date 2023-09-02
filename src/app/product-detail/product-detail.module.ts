import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

import { DecriptionProductComponent } from './decription-product/decription-product.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { SimiliarProductComponent } from './similiar-product/similiar-product.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [
    RelatedProductComponent,
    DecriptionProductComponent,
    SimiliarProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductDetailModule {}
