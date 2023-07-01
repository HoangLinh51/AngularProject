import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, delay, throwError, map, switchMap } from 'rxjs';
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
  datas: Product[] = [];
  procategory: Product[] = [];
  productDetail: Product = new Product();
  category!: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllproduct();
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.productService.getProductById(Number(id)))
      )
      .subscribe((product: any) => {
        this.productDetail = product;
        this.getProductCategory(this.productDetail.category);
        // console.log('category-product', this.productDetail.category);
        // console.log('detail-product', this.productDetail);
      });
  }

  getAllproduct() {
    this.productService
      .searchProduct('', this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        console.log('product-related', this.datas);
      });
  }

  getProductCategory(category: string) {
    this.productService.getProductByCategory(category).subscribe((res: any) => {
      this.procategory = res.products;
      // console.log('product-similiar------>:', this.procategory);
    });
  }
}
