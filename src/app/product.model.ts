export interface IProductList {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export class Product {
  id!: number;
  title!: string;
  price!: number;
  images!: string[];
  description!: string;
  category!: string;
  brand!: string;
  quantity!: number;
  totalAmount!: number;
}

export class Order {
  id!: number;
  address!: string;
  city!: string;
  country!: string;
  email!: string;
  name!: string;
  payment!: string;
  phone!: string;
  postcode!: string;
  product!: Product[];
  totalAmount!: number;
}
