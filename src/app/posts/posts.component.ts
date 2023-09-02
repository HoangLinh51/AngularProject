import { Component } from '@angular/core';
import { Posts } from '../model/post.model';
import { PostService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  totalPost: number = 0;
  page: number = 0;
  posts: Posts[] = [];
  value: number = 0;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getList('', 1);
    this.getAllpost();
  }
  getAllpost() {
    this.postService.getAll(this.page).subscribe((res: any) => {
      this.posts = res.products;
      this.totalPost = res.total;
      console.log('this.getAllpost', res.posts);
    });
  }

  getList(keyword: string, page: number) {
    this.postService.searchPost(keyword, page).subscribe((res: any) => {
      this.posts = res.posts;
      this.totalPost = res.total;
    });
  }

  renderPage(event: number) {
    this.page = event;
    this.getList('', event);
  }
}
