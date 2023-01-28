// Lazy loading melhora a performance, ou seja, a aplicação fica mais rápida. Para isso deve-se criar um módulo

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// Componentes

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  // Precisa referenciar que é uma rota filha - lazy loading trabalha com essa premissa
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

