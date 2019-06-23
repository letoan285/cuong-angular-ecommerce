import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public border = '';
  constructor() { }

  ngOnInit() {
  }
  changeBorder(color: string){
    this.border =  '4px solid ' + color;
    
  }

}
