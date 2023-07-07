import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { GrossProductComponent } from './gross-product/gross-product.component';

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
  dataFromStorage: any[] = [];
  receivedData: any;
  productco: Product = new Product();
  quantity!: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllproduct();
    this.getDataFromStorage();
  }

  getAllproduct() {
    this.productService
      .searchProduct('', this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.allProduct = res.total;
        // console.log('datas------>:', this.datas);
      });
  }

  getDataFromStorage(): void {
    const storageData = localStorage.getItem('cart');
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
    }
  }

  removeItem(productco: any) {
    this.receivedData = productco;
    this.getDataFromStorage();
    const uData = this.dataFromStorage.filter(
      (product) => product.id !== this.receivedData
    );
    console.log('uData====', uData);
    console.log('product====', productco);

    localStorage.setItem('cart', JSON.stringify(uData));
    const storageData = localStorage.getItem('cart');
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
    }
  }
}
