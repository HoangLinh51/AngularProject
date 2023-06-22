import { Component } from '@angular/core';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
})
export class NewproductComponent {
  productList = [
    {
      id: '1',
      name: 'SamSung Smart TV',
      price: '700.0',
      imageUrl: '/assets/img/product-1.png',
    },
    {
      id: '2',
      name: 'Macbook pro2022',
      price: '800.0',
      imageUrl: '/assets/img/product-2.jpg',
    },
    {
      id: '3',
      name: 'Iphone 13 Pro Max',
      price: '500.0',
      imageUrl: '/assets/img/product-3.png',
    },
    {
      id: '4',
      name: 'Playstation-5',
      price: '400.0',
      imageUrl: '/assets/img/product-4.jfif',
    },
    {
      id: '5',
      name: 'Asus TUF A15 ',
      price: '750.0',
      imageUrl: '/assets/img/product-5.png',
    },
    {
      id: '6',
      name: 'PC Gamming',
      price: '700.0',
      imageUrl: '/assets/img/product-6.jfif',
    },
    {
      id: '7',
      name: 'Xiaomi Note 13',
      price: '600.0',
      imageUrl: '/assets/img/product-7.jfif',
    },
    {
      id: '8',
      name: 'Apple Watch SE 2022',
      price: '400.0',
      imageUrl: '/assets/img/product-8.jpg',
    },
    {
      id: '9',
      name: 'SamSung Smart TV',
      price: '700.0',
      imageUrl: '/assets/img/product-1.png',
    },
    {
      id: '10',
      name: 'Macbook pro2022',
      price: '800.0',
      imageUrl: '/assets/img/product-2.jpg',
    },
  ];
}
