import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  price = 9999;
  parentName = 'Parent name';
  public parentData = {
    name: 'apple cha',
    price: 9999
  }
  // @Output() 
  constructor() { }

  ngOnInit() {
  }

}
