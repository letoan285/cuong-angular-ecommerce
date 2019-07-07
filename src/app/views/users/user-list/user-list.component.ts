import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userSelected = 'cuongnv';
  users = [
    {
      id: 1, name: 'user 1', email: 'user1@gmail.com', avatar: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg',
    },
    {
      id: 2, name: 'user 2', email: 'user2@gmail.com', avatar: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg',
    },
    {
      id: 3, name: 'user 3', email: 'user3@gmail.com', avatar: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg',
    },
    {
      id: 4, name: 'user 4', email: 'user4@gmail.com', avatar: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg',
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  userSelectedMethod(e: any){
    this.userSelected = e;
  }
}
