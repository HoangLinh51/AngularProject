import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-similiar-product',
  templateUrl: './similiar-product.component.html',
  styleUrls: ['./similiar-product.component.css'],
})
export class SimiliarProductComponent {
  @Input() productco: Product = new Product();

  constructor() {}

  ngOnInit(): void {}
}
