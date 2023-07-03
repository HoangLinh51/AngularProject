import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-gross',
  templateUrl: './gross-product.component.html',
  styleUrls: ['./gross-product.component.css'],
})
export class GrossProductComponent {
  dataFromStorage: any[] = [];
  product: Product[] = [];

  @Input() productco: Product = new Product();
  @Output() sendData = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  removeItem() {
    this.sendData.emit(this.productco.id);
  }
}
