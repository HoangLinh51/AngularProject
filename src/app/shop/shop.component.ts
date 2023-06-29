import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, delay, throwError, skip } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  totalproduct: number = 0;
  pagination: number = 0;
  datas: Product[] = [];
  form!: FormGroup;
  submitted = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllproduct();
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  getAllproduct() {
    this.productService.getAll(this.pagination).subscribe((res: any) => {
      this.datas = res.products;
      this.totalproduct = res.total;
      // console.log('datas------>:', this.datas);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.getAllproduct();
  }

  getProductbyId(id: number): Observable<Product> {
    const product = this.datas.find((p) => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
  get f() {
    return this.form.controls;
  }
  search() {
    this.submitted = true;
    this.productService
      .searchProduct(this.f.search.value)
      .subscribe((res: any) => {
        this.datas = res.products;
        this.totalproduct = res.total;
        // console.log('product-search', res);
      });
  }
}
