// Lazy loading melhora a performance, ou seja, a aplicação fica mais rápida. Para isso deve-se criar módulo

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dasboard-routing-module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  // exports: [
  //   HomeComponent
  // ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
