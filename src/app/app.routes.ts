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
  {
    path: 'homepage', component: MenuComponent, children: [
      { path: 'contatos', component: ContactsComponent },
      { path: 'empregados', component: EmployeesComponent },
      { path: 'catalogo-produtos', component: ProductCatalogComponent },
      { path: 'pedidos', component: OrderComponent },
      { path: 'controle-estoque', component: InventoryControlComponent },
    ]
  },
]
