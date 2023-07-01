import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.css'],
})
export class TopSellersComponent {
  productList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() productco: Product = new Product();
}
