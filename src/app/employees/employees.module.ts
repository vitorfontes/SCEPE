import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmployeesComponent } from './employees.component';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule,
    NgbModule
  ],
  exports: [EmployeesComponent],
})
export class EmployeesModule { }
