import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  public productForm: FormGroup;
  dissableButton = false;
  public product = {
    name: 'iphone 6',
    description: 'thsi is default descript tion',
    price: 6000
  }
  emailPattern = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.productForm = new FormGroup({
    //   name: new FormControl(),
    //   description: new FormControl(),
    //   price: new FormControl()
    // });
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }

  creatProduct(): void {
    console.log(this.productForm);
    // if(this.productForm.invalid){
    //   // alert('Can phan dien cac truoc require');
    // } else {
    //   // alert('form hop le, xam on');
    // }
    this.dissableButton = true ;
    const name = this.productForm.get('name').value;
    // console.log(name);
    // this.productForm.reset();
  }

}
