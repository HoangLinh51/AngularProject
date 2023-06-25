import { Component } from '@angular/core';
import { IProducts } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  productcart: IProducts[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getAllcart();
    // this.getAllcategories();
  }
  getAllcart() {
    this.cartService.getAll().subscribe((res: any) => {
      this.productcart = res.products;
      console.log('productcart------>:', this.productcart);
    });
  }
}
