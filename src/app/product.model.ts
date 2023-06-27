export class Product {
  id!: number;
  title!: string;
  price!: number;
  images!: string[];
  description!: string;
  category!: string;
  brand!: string;
}

export interface IProductList {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
