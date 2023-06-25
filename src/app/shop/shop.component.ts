import { Component } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
// import { CategoryService } from './category.service';
import { IProductList, Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  allProduct: number = 0;
  pagination: number = 0;
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
    this.productService.getAll(this.pagination).subscribe((res: any) => {
      this.datas = res.products;
      this.allProduct = res.total;
      console.log('datas------>:', this.datas);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.getAllproduct();
  }

  getProductbyId(id: number): Observable<Product> {
    const product = this.datas.find((p) => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
  //  this.productService.getAll(this.pagination).subscribe((res: any) => {

  // getAllcategories(): void {
  //   this.categoryService.getAll().subscribe((res: any) => {
  //     this.category = res.category;
  //     console.log('getAllcategories------>:', this.category);
  //   });
  // }
}
