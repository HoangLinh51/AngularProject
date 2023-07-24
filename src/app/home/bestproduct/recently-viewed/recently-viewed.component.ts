import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css'],
})
export class RecentlyViewedComponent {
  @Input() productco: Product = new Product();

  constructor() {}

  ngOnInit(): void {}
}
