export class Product {
  id!: number;
  title!: string;
  price!: number;
  images!: string[];
  description!: string;
}

export interface IProductList {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
