import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userData: any;
  @Output() userSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectUser(name: string){
    this.userSelected.emit(name);
  }


}
//1. attribute directive, [ngIf]
// 2. structure directive *ngFor, *ngIf, *ngSwitchCase
// 3. component directive /custom