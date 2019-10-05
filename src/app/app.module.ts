import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { ROUTES } from './app.routes'

import { ContactsModule } from './contacts/contacts.module';
import { EmployeesModule } from './employees/employees.module';
import { OrderModule } from './order/order.module';
import { InventoryControlModule } from './invetory-control/inventory-control.module';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    ContactsModule,
    EmployeesModule,
    OrderModule,
    MenuModule,
    InventoryControlModule,
    ProductCatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
