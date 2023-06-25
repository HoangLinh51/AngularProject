import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  allProduct: number = 0;
  pagination: number = 1;
  pagesize: number = 6;
  // datas: any;
  datas: Product[] = [];

  constructor(
    private productService: ProductService // private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllproduct();
    // this.getAllcategories();
  }

  getAllproduct() {
    this.productService
      .getAll(this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.allProduct = res.total;
        console.log('datas------>:', this.datas);
      });
  }
}
