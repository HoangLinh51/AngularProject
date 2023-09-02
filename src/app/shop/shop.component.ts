import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, delay, throwError } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  totalproduct: number = 0;
  page: number = 0;
  datas: Product[] = [];
  form!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
    });
    this.getlist('', 1);
    this.getAllproduct();
  }

  get f() {
    return this.form.controls;
  }

  getAllproduct() {
    this.productService.getAll(this.page).subscribe((res: any) => {
      this.datas = res.products;
      this.totalproduct = res.total;
    });
  }

  renderPage(event: number) {
    this.page = event;
    this.getlist('', event);
  }

  getProductbyId(id: number): Observable<Product> {
    const product = this.datas.find((p) => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }

  getlist(keyword: string, page: number) {
    this.productService.searchProduct(keyword, page).subscribe((res: any) => {
      this.datas = res.products;
      this.totalproduct = res.total;
    });
  }

  search() {
    const keyword = this.f.search.value;
    this.page = 1;
    this.getlist(keyword, this.page);
  }
}
