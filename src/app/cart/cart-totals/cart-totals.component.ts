import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.css'],
})
export class CartTotalsComponent {
  product: Product[] = [];
  user: IUser | null;

  @Input() productco: Product = new Product();
  @Output() totalAmounts = new EventEmitter<number>();

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }

  totalAmount() {
    const cartItems = JSON.parse(
      localStorage.getItem('cart' + this.user?.id) || '[]'
    );
    const totalAmounts = cartItems.reduce(
      (sum: number, product: { price: number; quantity: number }) =>
        sum + product.price * product.quantity,
      0
    );
    return totalAmounts;
  }
}
