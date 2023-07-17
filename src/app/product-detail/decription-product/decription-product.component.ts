import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-decription-product',
  templateUrl: './decription-product.component.html',
  styleUrls: ['./decription-product.component.css'],
})
export class DecriptionProductComponent {
  @Input() product: Product = new Product();
}
