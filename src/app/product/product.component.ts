import { CartComponent } from '../cart/cart.component';
import { listItems } from '../data';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../data';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  public items: any = listItems;
  public cart: any = [];
  touch = false;
  public idInCart = this.cart.map((item) => {
    return item.id;
  });
  public Total: number;
  public t: any = [];
  public inStock = true;
  public productLikeClass: string;
  public productName = 'Apple';
  public productData: any;
  public products = [
    { id: 1, name: 'product 1', price: 100, stock: 2 },
    { id: 2, name: 'product 2', price: 200, stock: 2 },
    { id: 3, name: 'product 3', price: 300, stock: 2 },
    { id: 4, name: 'product 4', price: 400, stock: 2 }
  ];
  constructor(private productService: ProductService) {
    this.cart = data.rootCarts;
  }
  ngOnInit() {
    this.getLikeClass();
    this.productService.getProducts().subscribe(res => {
      this.productData = res;

      
    })
    console.log('product data ', this.productData);
  }


  getLikeClass() {
    this.productLikeClass = 'btn btn-sm btn-info';
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
      if (this.t.filter(el => result.id === el).length > 0) {
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
  likeProduct(product: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === product.id) {
        this.items[i].isLike = !this.items[i].isLike;
      }
    }


  }
  getProductLikeClass(isLike: boolean) {
    if (isLike) {
      return 'btn btn-sm btn-outline-info';
    } else {
      return 'btn btn-sm btn-info';
    }
  }
  getLikeStt(isLike: boolean) {
    if (isLike) {
      return 'Like this';
    } else {
      return ' Unlike this';
    }
  }
}
