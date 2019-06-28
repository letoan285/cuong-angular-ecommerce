import { ProductComponent } from '../product/product.component';
import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import data from '../data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends ProductComponent implements OnInit {

  constructor() {
    super();
    this.cart = data.rootCarts;
  }

  ngOnInit() {
  }

}
