import { Routes } from '@angular/router'

import { ContactsComponent } from './contacts/contacts.component'
import { EmployeesComponent } from './employees/employees.component'
import { LoginComponent } from './login/login.component'
import { MenuComponent } from './menu/menu.component'
import { ProductCatalogComponent } from './product-catalog/product-catalog.component'
import { OrderComponent } from './order/order.component'
import { InventoryControlComponent } from './invetory-control/inventory-control.component'

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'contatos', component: ContactsComponent },
  { path: 'empregados', component: EmployeesComponent },
  { path: 'controle-estoque', component: InventoryControlComponent },
  { path: 'homepage', component: MenuComponent },
  { path: 'catalogo-produtos', component: ProductCatalogComponent },
  { path: 'pedidos', component: OrderComponent }
]
