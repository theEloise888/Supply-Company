// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-vendor-detail',
//   templateUrl: './vendor-detail.component.html',
//   styleUrls: ['./vendor-detail.component.scss']
// })
// export class VendorDetailComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }


import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Vendor } from './vendor';
import { ValidatePhone } from '../validators/phoneno.validator';
import { ValidatePostalCode} from '../validators/postalcode.validator';
import { ValidateEmail} from '../validators/email.validator';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html'
})
export class VendorDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components.
  // An @Input() property is writable
  @Input() selectedVendor: Vendor;
  // while an @Output() property is observable.
  @Output() cancelled = new EventEmitter();
  //  EventEmitter - Use in components with the @Output directive to emit
  //  custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
  @Output() deleted = new EventEmitter();
  @Output() saved = new EventEmitter();
  vendorForm: FormGroup;
  name: FormControl;
  address1: FormControl;
  city: FormControl;
  province: FormControl;
  postalCode: FormControl;
  phone: FormControl;
  type: FormControl;
  email: FormControl;
  originalName: string;
  constructor(private builder: FormBuilder) {
    // this.name = new FormControl();
    // this.address1 = new FormControl();
    // this.city = new FormControl();
    // this.province = new FormControl();
    // this.postalCode = new FormControl();
    //  this.phone = new FormControl();
    // this.type = new FormControl();
    // this.email = new FormControl();
    this.name = new FormControl('', Validators.compose([Validators.required]));
    this.address1 = new FormControl('', Validators.compose([Validators.required]));
    this.city = new FormControl('', Validators.compose([Validators.required]));
    this.province = new FormControl('', Validators.compose([Validators.required]));
    this.postalCode = new FormControl('', Validators.compose([Validators.required, ValidatePostalCode]));
    // this.phone = new FormControl('', Validators.compose([Validators.required]));
    this.phone = new FormControl('', Validators.compose([Validators.required, ValidatePhone]));
    this.type = new FormControl('', Validators.compose([Validators.required]));
    this.email = new FormControl('', Validators.compose([Validators.required, ValidateEmail]));
  } // constructor

  // The ngOnInit lifecycle method then loads the form with the data using the patchValue method
  ngOnInit(): void {
    this.vendorForm = new FormGroup({
      name: this.name,
      address1: this.address1,
      city: this.city,
      province: this.province,
      postalCode: this.postalCode,
      phone: this.phone,
      type: this.type,
      email: this.email
    });

// patchValue doesn’t care if all values present
    this.vendorForm.patchValue({
      name: this.selectedVendor.name,
      address1: this.selectedVendor.address1,
      city: this.selectedVendor.city,
      province: this.selectedVendor.province,
      postalCode: this.selectedVendor.postalCode,
      phone: this.selectedVendor.phone,
      type: this.selectedVendor.type,
      email: this.selectedVendor.email
    });
  } // ngOnInit
  updateSelectedVendor(): void {
    this.selectedVendor.name = this.vendorForm.value.name;
    this.selectedVendor.address1 = this.vendorForm.value.address1;
    this.selectedVendor.city = this.vendorForm.value.city;
    this.selectedVendor.province = this.vendorForm.value.province;
    this.selectedVendor.postalCode = this.vendorForm.value.postalCode;
    this.selectedVendor.phone = this.vendorForm.value.phone;
    this.selectedVendor.type = this.vendorForm.value.type;
    this.selectedVendor.email = this.vendorForm.value.email;
    this.saved.emit(this.selectedVendor);
  }
} // VendorDetailComponent
