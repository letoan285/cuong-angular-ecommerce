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
  public inStock = true;
  productLikeClass: string;
  public products = [
    {id: 1, name: 'product 1', price: 100, stock: 2},
    {id: 2, name: 'product 2', price: 200, stock: 2},
    {id: 3, name: 'product 3', price: 300, stock: 2},
    {id: 4, name: 'product 4', price: 400, stock: 2}
  ];
  getBigTotal() {
    // const reducer = (a?, b?) => {
    //   // if(a & b){
    //   //   return a+b;
    //   // } else {
    //   //   return null;
    //   // } retu
    // }
    const reducer = (a?, b?) => a + b;
    return this.cart.map(el => el = el.total).reduce(reducer);
  }
  constructor() {
    this.cart = data.rootCarts;
  }
  
  ngOnInit() {
    this.getLikeClass();
  }

  getLikeClass(){
    this.productLikeClass = 'btn btn-sm btn-info';
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
    } else if (result.stock >= 1) {
      if ( this.t.filter( el => result.id === el ).length > 0 ) {
        result.stock--;
        result.buy++;
        result.total = result.buy * result.price;
      } else {
        result.buy++;
        result.stock--;
        this.t.push(result.id);
        result.total = result.buy * result.price;
        cart.push(result);
        }
    } else {
      alert('Sản phẩm đã hết');
    }
  }
  likeProduct(product: any){

    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].id === product.id){
        this.items[i].isLike = !this.items[i].isLike;
      }
    }

  }
  getProductLikeClass(isLike: boolean){
    if(isLike){
      return 'btn btn-sm btn-info';
    } else {
      return 'btn btn-sm btn-outline-info';
    }
  }
}


