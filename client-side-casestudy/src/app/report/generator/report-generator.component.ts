import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Observable, of, Subscription} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Vendor } from '../../vendor/vendor';
import { Product } from '../../product/product';
import { ReportItem } from '../report-item';
import { Report } from '../report';
import { BASEURL, PDFURL } from '../../constants';
import { VendorService } from '../../vendor/vendor.service';
import { ProductService } from '../../product/product.service';
import { ReportService } from '../report.service';
@Component({
  templateUrl: './report-generator.component.html'
})
export class ReportGeneratorComponent implements OnInit, OnDestroy {
// form
  generatorForm: FormGroup;
  vendorid: FormControl;
  productid: FormControl;
  quantityid: FormControl;
  subscription: Subscription;
  products$: Observable<Product[]>; // everybody's expenses
  vendors$: Observable<Vendor[]>; // all vendors
  vendorproducts$: Observable<Product[]>; // all expenses for a particular vendor
  quantities$: Observable<ReportItem[]>; // all quantites for a particular product
  items: Array<ReportItem>; // product items that will be in report
  units: Array<ReportItem>; // number of product quantity in the report
  selectedproducts: Product[]; // products that being displayed currently in app
  selectedProduct: Product; // the current selected product
  selectedVendor: Vendor; // the current selected vendor
  selectedQuantity: Product; // the current selected quantity for the products
  selectedquantites: Product[]; // quantities being displayed currently in app
  pickedProduct: boolean;
  pickedVendor: boolean;
  generated: boolean;
  hasProducts: boolean;
  msg: string;
  url: string;
  sub: number;
  tax: number;
  total: number;
  reportno: number;
  hidePricingFields: boolean;
  constructor(private builder: FormBuilder,
              private vendorService: VendorService,
              private productService: ProductService,
              private reportService: ReportService) {
    this.pickedVendor = false;
    this.pickedProduct = false;
    this.generated = false;
    this.hidePricingFields = true;
    this.url = BASEURL + 'reports';
  } // constructor
  ngOnInit(): void {
    this.msg = '';
    this.vendorid = new FormControl('');
    this.productid = new FormControl('');
    this.quantityid = new FormControl('');
    this.generatorForm = this.builder.group({
      vendorid: this.vendorid,
      productid: this.productid,
      quantityid: this.quantityid
    });
    this.onPickVendor();
    this.onPickProduct();
    this.onPickQuantity();
    this.msg = 'loading vendors and products from server...';
    this.vendors$ = this.vendorService.getAll().pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.msg = `Error: ${error.error.message}`;
        } else {
          this.msg = `Error: ${error.message}`;
        }
        return of([]); // returns an empty array if there's a problem
      })
    );
    this.products$ = this.productService.getAll().pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          this.msg = `Error: ${error.error.message}`;
        } else {
          this.msg = `Error: ${error.message}`;
        }
        return of([]);
      })
    );
    this.msg = 'Vendors and Products loaded';
  } // ngOnInit
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } // ngOnDestroy
  /**
   * onPickVendor - Another way to use Observables, subscribe to the select change event
   * then load specific vendor products for subsequent selection
   */
  onPickVendor(): void {
    this.subscription = this.generatorForm.get('vendorid').valueChanges.subscribe(val => {
      this.selectedProduct = null;
      this.selectedQuantity = null;
      this.selectedVendor = val;
      this.loadVendorProducts();
      this.pickedProduct = false;
      this.hasProducts = false;
      this.msg = 'choose product for vendor';
      this.pickedVendor = true;
      this.generated = false;
      this.items = []; // array for the report
      this.selectedproducts = []; // array for the details in app html products
      this.selectedquantites = []; // array for the details in app html quantity
    });
  } // onPickVendor
  /**
   * onPickProduct - subscribe to the select change event then
   * update array containing items.
   */
  onPickProduct(): void {
    const xSubscr = this.generatorForm.get('productid').valueChanges.subscribe(val => {
      this.selectedProduct = val;

      this.pickedProduct = true;
      this.generatorForm.patchValue({quantityid: this.selectedProduct.eoq }); // default eoq value
      // tslint:disable-next-line:max-line-length
      const item: ReportItem = {name: this.selectedProduct.name, id: 0, price: this.selectedProduct.msrp, costprice: this.selectedProduct.costprice, productid: this.selectedProduct.id,
        po: 0, qty: this.selectedProduct.eoq};

      if (this.items.find(it => it.productid === this.selectedProduct.id)) {
        // ignore entry
        return;
      }
      else { // add entry
        this.items.push(item);
        this.selectedproducts.push(this.selectedProduct);
      }
    });
    this.subscription.add(xSubscr); // add it as a child, so all can be destroyed together
  } // onPickProduct
  /**
   * onPickQuantity - subscribe to the select change event then
   * update array containing items.
   */
  onPickQuantity(): void {
    const xSubscr = this.generatorForm.get('quantityid').valueChanges.subscribe(val => {
      if ( val === 'eoq'){
        val = this.selectedProduct.eoq;
        this.items = []; // array for the details in app html products
      }
      const found = this.items.find(x => x.productid === this.selectedProduct.id);
      const item: ReportItem = {name: this.selectedProduct.name, id: 0, price:
        this.selectedProduct.msrp, costprice: this.selectedProduct.costprice, productid: this.selectedProduct.id,
        po: 0, qty: val};
      if (this.items.find(it => item.productid  === it.productid && it.qty === item.qty)) { // ignore entry
      }
      if ( val === '0' ){
        const idx = this.items.findIndex(it => it.productid === this.selectedProduct.id);
        if (idx !== -1) {
          this.items.splice(idx, 1);
        }
        this.msg = `All ${this.selectedProduct.name}s removed!`;
      }
      else if (found && found.qty !== val) {
       const updateItem = this.items.findIndex(it => it.productid === this.selectedProduct.id);
       this.items[updateItem].qty = val;
       this.msg = `${item.qty} ${this.selectedProduct.name} added`;
      }
      else { // add entry
        this.items.push(item);
        this.selectedproducts.push(this.selectedProduct);
        this.msg = `${item.qty} ${this.selectedProduct.name} added`;
      }
      if (this.items.length > 0) {
        this.hasProducts = true;
      }
      this.sub = 0.0;
      this.tax = 0.0;
      this.total = 0.0;
      this.items.forEach(sub => this.sub += sub.qty * sub.price);
      this.items.forEach(tax => this.tax += (tax.qty * tax.price) * 0.13);
      this.items.forEach(total => this.total += (total.qty * total.price) * 1.13);
    });
    this.subscription.add(xSubscr); // add it as a child, so all can be destroyed together
  } // onPickQuantity
  /**
   * loadVendorProducts - filter for a particular vendor's products
   */
  loadVendorProducts(): void {
    this.vendorproducts$ = this.products$.pipe(
      map( products =>
// map each product in the array and check whether or not it belongs to selected vendor
          products.filter(product => product.vendorid === this.selectedVendor.id)
      )
    );
  } // loadVendorProducts
  /**
   * createReport - create the client side report
   */
  createReport(): void {
    this.generated = false;
    const report: Report = {id: 0, items: this.items, amount: this.total, vendorid: this.selectedProduct.vendorid};
    const rSubscr = this.reportService.add(report).subscribe(
       payload => { // server should be returning new id
    if (typeof payload === 'number') {
      this.msg = `Report ${payload} created!`;
      this.reportno = payload;
      this.generated = true;
      this.hasProducts = false;
      this.pickedVendor = false;
      this.pickedProduct = false;
      this.hidePricingFields = false;
    } else {
      this.msg = 'Report not created! - server error';
    }
       },
    err => {
        this.msg = `Error - product not created - ${err.status} - ${err.statusText}`;
      });
    this.subscription.add(rSubscr); // add it as a child, so all can be destroyed together
  } // createReport

  viewPdf(): void {
    window.open(PDFURL + this.reportno, '');
  } // viewPdf
} // ReportGeneratorComponent
