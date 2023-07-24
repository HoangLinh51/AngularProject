import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.css'],
})
export class TopSellersComponent {
  @Input() productco: Product = new Product();

  constructor() {}

  ngOnInit(): void {}
}
