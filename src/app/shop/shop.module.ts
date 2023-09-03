import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ProductComponent, ShopComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ShopRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [FormsModule],
})
export class ShopModule {}
