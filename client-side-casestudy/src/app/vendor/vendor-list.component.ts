// import { Component, Input, Output, EventEmitter } from '@angular/core'; // added output and eventemitter for lab4
// import { Vendor } from './vendor';
// @Component({
//   selector: 'app-vendor-list',
//   template:
//       `
//     <mat-list-item *ngFor="let vendor of vendors" (click)="selected.emit(vendor)" layout="row" class="pad-xs mat-title">
//       {{ vendor.id }} - {{ vendor.name}}
//     </mat-list-item>
//   `
// })
// export class VendorListComponent {
//   @Input() vendors: Vendor[];
//   @Output() selected = new EventEmitter(); // added for lab4
// } // VendorListComponent

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vendor } from './vendor';
@Component({
  selector: 'app-vendor-list',
  template:
    `
<mat-list-item *ngFor="let vendor of vendors" (click)="selected.emit(vendor)">
{{ vendor.id }} - {{ vendor.name}}
</mat-list-item>
`
})
export class VendorListComponent {
  @Input() vendors: Vendor[];
  @Output() selected = new EventEmitter();
} // VendorListComponent
