import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-gross',
  templateUrl: './gross-product.component.html',
  styleUrls: ['./gross-product.component.css'],
})
export class GrossProductComponent {
  @Input() productco: Product = new Product();
  @Output() sendData = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  removeItem() {
    this.sendData.emit(this.productco.id);
  }
  onChangeQuantity() {
    let productstorage = JSON.parse(localStorage.getItem('cart')!);
    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === this.productco.id) {
        productstorage[i].quantity = this.productco.quantity;
        abc = true;
      }
    }
    localStorage.setItem('cart', JSON.stringify(productstorage));
  }
}
