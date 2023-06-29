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
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll(0).subscribe((ps) => this.productList);
  }

  @Input() product: Product = new Product();
}
