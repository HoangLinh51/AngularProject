import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../post.model';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css'],
})
export class PostNewComponent implements OnInit {
  @Input() postco: Posts = new Posts();

  constructor() {}
  ngOnInit() {}
}
