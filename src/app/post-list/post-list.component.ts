import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any;
  constructor(private http: HttpClient, private postService: ProductService) { }

  ngOnInit() {
    this.getPostList();
  }
  getPostList(){
    this.postService.getProducts().subscribe(res => {
      this.posts = res;
    });
  }

}
