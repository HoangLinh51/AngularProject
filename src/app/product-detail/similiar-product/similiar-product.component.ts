import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-similiar-product',
  templateUrl: './similiar-product.component.html',
  styleUrls: ['./similiar-product.component.css'],
})
export class SimiliarProductComponent {
  @Input() productco: Product = new Product();

  constructor() {}
}
