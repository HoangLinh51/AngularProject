import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-orther',
  templateUrl: './orther-product.component.html',
  styleUrls: ['./orther-product.component.css'],
})
export class OrtherProductComponent {
  productList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() product: Product = new Product();
}
