import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from '../auth.model';
import { AuthService } from '../auth.service';
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
  dataFromStorage: any[] = [];
  receivedData: any;
  quantity!: number;
  form!: FormGroup;
  user: IUser | null;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

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
      });
  }

  getDataFromStorage(): void {
    const storageData = localStorage.getItem('cart' + this.user?.id);
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

    localStorage.setItem('cart' + this.user?.id, JSON.stringify(uData));
    const storageData = localStorage.getItem('cart' + this.user?.id);
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
    }
  }
}
