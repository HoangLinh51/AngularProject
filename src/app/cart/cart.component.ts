import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  allProduct: number = 0;
  pagination: number = 2;
  pagesize: number = 5;
  datas: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllproduct();
  }
  // getProductCategory(category: string) {
  //   this.productService.getProductByCategory(category).subscribe((res: any) => {
  //     this.procategory = res.products;
  //     console.log('product-similiar------>:', this.procategory);
  //   });
  // }

  getAllproduct() {
    this.productService
      .getAll(this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.allProduct = res.total;
        console.log('datas-----asdfa->:', this.datas);
      });
  }
}
