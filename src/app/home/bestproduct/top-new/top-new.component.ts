import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-top-new',
  templateUrl: './top-new.component.html',
  styleUrls: ['./top-new.component.css'],
})
export class TopNewComponent {
  productList: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input() productco: Product = new Product();
}
