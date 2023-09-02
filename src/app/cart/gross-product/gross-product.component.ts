import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Product } from 'src/app/model/product.model';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-gross',
  templateUrl: './gross-product.component.html',
  styleUrls: ['./gross-product.component.css'],
})
export class GrossProductComponent {
  user!: IUser | null;

  @Input() productco: Product = new Product();

  constructor(
    private authService: AuthService,
    private cartComponent: CartComponent
  ) {
    this.user = this.authService.userValue;
  }

  removeItem() {
    this.cartComponent.removeItem(this.productco.id);
  }

  onChangeQuantity() {
    this.cartComponent.onChangeQuantity(this.productco);
  }
  totalAmount() {
    this.cartComponent.totalAmount();
  }
}
