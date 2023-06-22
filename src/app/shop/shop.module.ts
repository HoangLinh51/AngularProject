import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import { CategoriesComponent } from './categories/categories.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    TitleComponent,
    ProductComponent,
    ShopComponent,
    // CategoriesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ShopRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class ShopModule {}
