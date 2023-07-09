import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.css'],
})
export class CartTotalsComponent {
  product: Product[] = [];

  @Input() productco: Product = new Product();
  @Output() totalAmounts = new EventEmitter<number>();
  constructor() {}

  totalAmount() {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalAmounts = cartItems.reduce(
      (sum: number, product: { price: number; quantity: number }) =>
        sum + product.price * product.quantity,
      0
    );
    return totalAmounts;
  }
}
