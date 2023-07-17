import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  allProduct: number = 0;
  pagination: number = 3;
  pagesize: number = 5;
  datas: Product[] = [];

  constructor(private productService: ProductService) {
    // this.getDataFrLocalStorage();
  }

  ngOnInit(): void {
    this.getAllproduct();
  }

  getAllproduct() {
    this.productService
      .searchProduct('', this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.allProduct = res.total;
      });
  }
}
