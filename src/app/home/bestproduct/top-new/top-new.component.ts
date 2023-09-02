import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-top-new',
  templateUrl: './top-new.component.html',
  styleUrls: ['./top-new.component.css'],
})
export class TopNewComponent {
  @Input() productco: Product = new Product();

  constructor() {}
}
