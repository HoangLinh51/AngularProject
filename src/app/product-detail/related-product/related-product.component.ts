import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Product } from 'src/app/model/product.model';
import { CART_KEY } from 'src/helpers/localStorage';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css'],
})
export class RelatedProductComponent {
  @Input() product: Product = new Product();

  form!: FormGroup;
  user: IUser | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      product: [this.product, Validators.required],
    });
    this.addToCart;
  }

  get f() {
    return this.form.controls;
  }

  addToCart(id: number) {
    let productstorage =
      JSON.parse(localStorage.getItem(CART_KEY + this.user?.id)!) || [];
    const product = this.f.product.value;
    let abc = false;
    for (let i = 0; i < productstorage.length; ++i) {
      const c = productstorage[i];
      if (c.id === product.id) {
        productstorage[i].quantity += 1;
        abc = true;
      }
    }
    if (!abc) {
      product.quantity = 1;
      productstorage.push(product);
    }
    localStorage.setItem(
      CART_KEY + this.user?.id,
      JSON.stringify(productstorage)
    );
    this.toastrService.success(
      'The product ' + this.product.title + ' has been added to cart!',
      'Success!'
    );
  }
}
