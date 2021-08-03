import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorHomeComponent } from './vendor/vendor-home.component';
import { ProductHomeComponent } from './product/product-home.component';
import { ReportGeneratorComponent } from './report/generator/report-generator.component';
import { ReportViewerComponent } from './report/viewer/report-viewer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vendors', component: VendorHomeComponent },
  { path: 'products', component: ProductHomeComponent },
  { path: 'generator', component: ReportGeneratorComponent },
  { path: 'viewer', component: ReportViewerComponent },
  { path: '', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
