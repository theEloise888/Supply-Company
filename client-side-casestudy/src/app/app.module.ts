// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { VendorHomeComponent } from './vendor/vendor-home.component';
// import { MatComponentsModule } from './mat-components/mat-components.module';
// import { VendorModule } from './vendor/vendor.module';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import { HomeComponent } from './home/home.component';
//
//
// @NgModule({
//   imports: [
//     BrowserAnimationsModule,
//     BrowserModule,
//     VendorModule,
//     HttpClientModule,
//     MatComponentsModule,
//     MatTooltipModule
//   ],
//   bootstrap: [VendorHomeComponent],
//   declarations: [HomeComponent]
// })
//
// export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { VendorModule } from './vendor/vendor.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { ReportModule } from './report/report.module';
import { ReportViewerComponent } from './report/viewer/report-viewer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    VendorModule,
    ProductModule,
    HttpClientModule,
    MatComponentsModule,
    ReportModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, ReportViewerComponent]
})
export class AppModule {}
