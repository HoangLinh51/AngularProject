import { Component, Input } from '@angular/core';
import { CartTotalsComponent } from 'src/app/cart/cart-totals/cart-totals.component';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css'],
})
export class YourOrderComponent {
  @Input() totalAmounts!: CartTotalsComponent;

  constructor() {
    // console.log('this.totalAmounts', this.totalAmounts);
  }
}
