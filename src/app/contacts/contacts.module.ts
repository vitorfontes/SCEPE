import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactsComponent } from './contacts.component';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule
  ],
  exports: [ContactsComponent]
})
export class ContactsModule { }
