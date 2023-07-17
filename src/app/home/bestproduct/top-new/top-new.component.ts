import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-top-new',
  templateUrl: './top-new.component.html',
  styleUrls: ['./top-new.component.css'],
})
export class TopNewComponent {
  constructor() {}

  ngOnInit(): void {}

  @Input() productco: Product = new Product();
}
