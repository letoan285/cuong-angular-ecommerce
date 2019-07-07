import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  posts: any;
  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit() {
    this.getPostList();
  }
  getPostList(){
    this.productService.getProducts().subscribe(res => {
      this.posts = res;
    });
  }

}
