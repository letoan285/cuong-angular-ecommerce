import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-ecommerce';

  public rootCarts = [{
    id: 1,
    name: 'Iphone 6',
    price: 2000,
    stock: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi14QClrJEaY16bNZ41nYXzw10KbNOja_2KsKzuUdZlAOSoZQr',
    showPrice: false,
  }];

}
