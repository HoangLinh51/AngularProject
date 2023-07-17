import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/auth.model';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-gross',
  templateUrl: './gross-product.component.html',
  styleUrls: ['./gross-product.component.css'],
})
export class GrossProductComponent {
  user: IUser | null;

  @Input() productco: Product = new Product();
  @Output() sendData = new EventEmitter<number>();

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
    console.log('this.productco', this.productco);
  }
  ngOnInit(): void {}

  removeItem() {
    this.sendData.emit(this.productco.id);
  }
  onChangeQuantity() {
    let productstorage = JSON.parse(
      localStorage.getItem('cart' + this.user?.id)!
    );
    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === this.productco.id) {
        productstorage[i].quantity = this.productco.quantity;
        abc = true;
      }
    }
    localStorage.setItem(
      'cart' + this.user?.id,
      JSON.stringify(productstorage)
    );
  }
}
