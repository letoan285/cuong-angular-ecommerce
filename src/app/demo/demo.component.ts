import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public myId = 'my-id';
  public successClass = 'text-success';
  public isItalic = 'italic';
  public isDissable = false;
  myValue: any;
  // 1. class binding
  // 2. ngClass
  public highlighColor = 'coral';
  constructor() { }

  ngOnInit() {
  }
  changeColor(event: string): void {
    console.log(event);
  }
  getValue(myInput: any){
    // let a = document.getElementById('input-id');
    this.myValue = myInput;
    // console.log(myInput);
    
    
  }

}
