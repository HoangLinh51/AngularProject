import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-decription-product',
  templateUrl: './decription-product.component.html',
  styleUrls: ['./decription-product.component.css'],
})
export class DecriptionProductComponent {
  @Input() product: Product = new Product();
}
