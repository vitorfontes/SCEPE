import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryControlComponent } from './inventory-control.component';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [InventoryControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NavbarModule
  ],
  exports: [InventoryControlComponent],
})
export class InventoryControlModule { }
