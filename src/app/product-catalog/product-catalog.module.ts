import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCatalogComponent } from './product-catalog.component';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [ProductCatalogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule,
    NgbModule
  ],
  exports: [ProductCatalogComponent],
})
export class ProductCatalogModule { }
