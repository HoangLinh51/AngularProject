import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-interested',
  templateUrl: './interested-product.component.html',
  styleUrls: ['./interested-product.component.css'],
})
export class InterestedProductComponent {
  @Input() productco: Product = new Product();
}
