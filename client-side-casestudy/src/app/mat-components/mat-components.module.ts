import { NgModule } from '@angular/core';
// added imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; // added for lab4 case
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'; // added for lab4 case
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, // added for lab4 case
  MatMenuModule,
  MatIconModule,
  MatInputModule, // added for lab4 case
  MatListModule,
  MatToolbarModule,
  MatSelectModule,
  MatTooltipModule,
  MatExpansionModule,
  MatPaginatorModule
]; // added for lab4 case


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, // added for lab4 case
    MatMenuModule,
    MatIconModule,
    MatInputModule, // added for lab4 case
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, // added for lab4 case
    MatMenuModule,
    MatInputModule,
    MatIconModule, // added for lab4 case
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule
  ]
})
export class MatComponentsModule { }
