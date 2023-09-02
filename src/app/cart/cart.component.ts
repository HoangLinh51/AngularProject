import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CART_KEY } from 'src/helpers/localStorage';
import { IUser } from '../model/auth.model';
import { AuthService } from '../service/auth.service';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  totalProduct: number = 0;
  pagination: number = 2;
  pagesize: number = 5;
  datas: Product[] = [];
  dataFromStorage: any[] = [];
  quantity!: number;
  form!: FormGroup;
  user: IUser | null;
  total!: number;
  priceShipping = 10;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.getAllproduct();
    this.getDataFromStorage();
    this.totalAmount();
  }

  getAllproduct() {
    this.productService
      .searchProduct('', this.pagination, this.pagesize)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.totalProduct = res.total;
      });
  }

  getDataFromStorage(): void {
    const storageData = localStorage.getItem(CART_KEY + this.user?.id);
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
    }
  }

  removeItem(productco: any) {
    this.getDataFromStorage();
    const uData = this.dataFromStorage.filter(
      (product) => product.id !== productco
    );
    localStorage.setItem(CART_KEY + this.user?.id, JSON.stringify(uData));
    const storageData = localStorage.getItem(CART_KEY + this.user?.id);
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
    }
  }

  onChangeQuantity(productc: Product) {
    const storageData = localStorage.getItem(CART_KEY + this.user?.id);
    if (storageData) {
      this.dataFromStorage = JSON.parse(storageData);
      let abc = false;
      for (let i = 0; i < this.dataFromStorage.length; ++i) {
        if (this.dataFromStorage[i].id === productc.id) {
          this.dataFromStorage[i].quantity = productc.quantity;
          abc = true;
        }
      }
      localStorage.setItem(
        CART_KEY + this.user?.id,
        JSON.stringify(this.dataFromStorage)
      );
    }
  }

  totalAmount(): number {
    const storageData = localStorage.getItem(CART_KEY + this.user?.id);
    if (storageData) {
      const cartItems = JSON.parse(storageData);
      this.total = cartItems.reduce(
        (sum: number, datas: { price: number; quantity: number }) =>
          sum + datas.price * datas.quantity,
        0
      );
    }
    return this.total;
  }
}
