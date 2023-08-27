export interface IPostList {
  posts: Posts[];
  total: number;
  skip: number;
  limit: number;
}

export class Posts {
  id!: number;
  title!: string;
  body!: string;
  userId!: number;
  tag!: string[];
  reactions!: number;
}
export class PostNew {
  name!: string;
  product!: string;
  email!: string;
  image!: string;
  body!: string;
}
