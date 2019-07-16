import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userSelected = 'cuongnv';
  public users;
  constructor(private http: HttpClient, private postService: ProductService) { }

  ngOnInit() {
    this.getUsersInfo()
  }
  userSelectedMethod(e: any){
    this.userSelected = e;
  } 
  getUsersInfo(){
    this.postService.getProducts().subscribe(res => {
      this.users = res;
    });
  }
}
