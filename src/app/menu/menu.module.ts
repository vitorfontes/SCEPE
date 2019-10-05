import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
