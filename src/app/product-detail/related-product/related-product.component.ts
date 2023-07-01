import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css'],
})
export class RelatedProductComponent {
  productList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() product: Product = new Product();
}
