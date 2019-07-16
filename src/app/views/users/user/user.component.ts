import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userData: any;
  @Output() userSelected = new EventEmitter();
  constructor(private http: HttpClient, private postService: ProductService) { }

  ngOnInit() {
    this.getUsersInfo();
  }
  selectUser(e: any){
    this.userSelected.emit(e);
    console.log(e)
  }
  getUsersInfo(){
    this.postService.getProducts().subscribe(res => {
      this.userData = res;
    });
  }
  
  

}
//1. attribute directive, [ngIf]
// 2. structure directive *ngFor, *ngIf, *ngSwitchCase
// 3. component directive /custom