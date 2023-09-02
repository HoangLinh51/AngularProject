import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-orther',
  templateUrl: './orther-product.component.html',
  styleUrls: ['./orther-product.component.css'],
})
export class OrtherProductComponent {
  @Input() product: Product = new Product();

  constructor() {}
}
