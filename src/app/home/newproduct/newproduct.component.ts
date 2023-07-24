import { Component } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
})
export class NewproductComponent {
  allProduct: number = 0;
  pagination: number = 1;
  pagesize: number = 8;
  datas: Product[] = [];

  constructor(private productService: ProductService) {}

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
  renderPage(event: number) {
    this.pagination = event;
    this.getAllproduct();
  }
}
