export interface IProducts {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface ICart {
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal: number;
  useId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface Cart {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}
