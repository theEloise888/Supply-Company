// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-product-detail',
//   templateUrl: './product-detail.component.html',
//   styles: [
//   ]
// })
// export class ProductDetailComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }

import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from './product';
import { Vendor } from '../vendor/vendor';
import { ValidateInts } from '../validators/int.validator';
import {ValidateDecimal} from '../validators/decimal.validator';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
// setter
  @Input() selectedProduct: Product;
  @Input() vendors: Vendor[];
  @Input() products: Product[];
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  productForm: FormGroup;
  id: FormControl;
  vendorid: FormControl;
  name: FormControl;
  costprice: FormControl;
  msrp: FormControl;
  rop: FormControl;
  eoq: FormControl;
  qoh: FormControl;
  qoo: FormControl;
  msg: string;
  dateincurred: FormControl;
  qrcodetxt: FormControl;
  control: AbstractControl;
  constructor(private builder: FormBuilder) {
    this.id = new FormControl('', Validators.compose([this.uniqueCodeValidator.bind(this), Validators.required]));
    // this.id = new FormControl('', Validators.compose([Validators.required]));
    this.vendorid = new FormControl('', Validators.compose([Validators.required, ValidateInts]));
    this.name = new FormControl('', Validators.compose([Validators.required]));
    this.costprice = new FormControl('', Validators.compose([Validators.required, ValidateDecimal]));
    this.msrp = new FormControl('', Validators.compose([Validators.required, ValidateDecimal]));
    this.rop = new FormControl('', Validators.compose([Validators.required, ValidateInts]));
    this.eoq = new FormControl('', Validators.compose([Validators.required, ValidateInts]));
    this.qoh = new FormControl('', Validators.compose([Validators.required, ValidateInts]));
    this.qoo = new FormControl('', Validators.compose([Validators.required, ValidateInts]));
    this.qrcodetxt = new FormControl('', Validators.compose([Validators.required]));
    this.dateincurred = new FormControl('', Validators.compose([Validators.required]));
  } // constructor
  ngOnInit(): void {
    this.productForm = this.builder.group({
      id: this.id,
      vendorid: this.vendorid,
      name: this.name,
      costprice: this.costprice,
      msrp: this.msrp,
      rop: this.rop,
      eoq: this.eoq,
      qoh: this.qoh,
      qoo: this.qoo,
      qrcodetxt: this.qrcodetxt,
      dateincurred: this.dateincurred
    });
// patchValue doesn't care if all values are present
    this.productForm.patchValue({
      id: this.selectedProduct.id,
      vendorid: this.selectedProduct.vendorid,
      name: this.selectedProduct.name,
      costprice: this.selectedProduct.costprice,
      msrp: this.selectedProduct.msrp,
      rop: this.selectedProduct.rop,
      eoq: this.selectedProduct.eoq,
      qoh: this.selectedProduct.qoh,
      qoo: this.selectedProduct.qoo,
      qrcodetxt: this.selectedProduct.qrcodetxt,
      dateincurred: this.selectedProduct.dateincurred
    });
  } // ngOnInit
  updateSelectedProduct(): void {
    this.selectedProduct.id = this.productForm.value.id;
    this.selectedProduct.vendorid = this.productForm.value.vendorid;
    this.selectedProduct.name = this.productForm.value.name;
    this.selectedProduct.msrp = this.productForm.value.msrp;
    this.selectedProduct.costprice = this.productForm.value.costprice;
    this.selectedProduct.rop = this.productForm.value.rop;
    this.selectedProduct.eoq = this.productForm.value.eoq;
    this.selectedProduct.qoh = this.productForm.value.qoh;
    this.selectedProduct.qoo = this.productForm.value.qoo;
    this.selectedProduct.qrcodetxt = this.productForm.value.qrcodetxt;
    this.selectedProduct.dateincurred = this.productForm.get('dateincurred').value;
    this.saved.emit(this.selectedProduct);
  }
  /**
   * uniqueCodeValidator - needed access to products property so not
   * with the rest of the validators
   */
  uniqueCodeValidator(control): { idExists: boolean } {
    if (this.products) {
      return this.products.find(p => p.id === control.value && !this.selectedProduct.id) ? {idExists: true} : null;
    } // uniqueCodeValidator
  }
} // ExpenseDetailComponent


