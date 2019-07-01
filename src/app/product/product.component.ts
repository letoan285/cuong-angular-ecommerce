import { CartComponent } from '../cart/cart.component';
import { listItems } from '../data';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../data';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  public items: any = listItems;
  public cart: any = [];
  public idInCart = this.cart.map((item) => {
    return item.id;
  });
  public Total: number;
  public t: any = [];
  constructor() {
    this.cart = data.rootCarts;
  }

  ngOnInit() {
  }
  getBigTotal() {
    const reducer = (a, b) => a + b;
    document.getElementById('total').innerHTML = this.cart.map(el => el = el.total).reduce(reducer);
  }
  addToCart(x: number): any {
    const result = this.items.find(item => item.id === x);
    const cart = this.cart;
    if (cart.length === 0) {
      result.stock--;
      this.t.push(result.id);
      result.buy++;
      result.total = result.buy * result.price;
      cart.push(result);
      this.getBigTotal();
    } else if (result.stock >= 1) {
      if ( this.t.filter( el => result.id === el ).length > 0 ) {
        result.stock--;
        result.buy++;
        result.total = result.buy * result.price;
        this.getBigTotal();
      } else {
        result.buy++;
        result.stock--;
        result.total = result.buy * result.price;
        this.t.push(result.id);
        cart.push(result);
        this.getBigTotal();
        }
    } else {
      alert('Sản phẩm đã hết');
    }
  }
}


