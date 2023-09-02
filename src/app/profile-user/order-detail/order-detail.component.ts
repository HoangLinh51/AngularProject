import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { IUser } from 'src/app/model/auth.model';
import { AuthService } from 'src/app/service/auth.service';
import { Order } from 'src/app/model/product.model';
import { ORDER_KEY } from 'src/helpers/localStorage';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent {
  user: IUser | null;
  orders: Order = new Order();

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(async (id) => this.getOrderById(Number(id)))
      )
      .subscribe((order: any) => {
        this.orders = order;
      });
  }

  getOrderById(id: number) {
    const orders: Order[] =
      JSON.parse(localStorage.getItem(ORDER_KEY + this.user?.id)!) || [];
    const order = orders.find((o: Order) => o.id === id);
    return order;
  }
}
