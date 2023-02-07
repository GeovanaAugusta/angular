import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
// import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AccountComponent } from './shared/account/account.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';

// const routes: Routes = [{
//   path: '',
//   // Dessa maneira não há necessidade de referenciar a tag do componente em questão no app.component
//   component: ReactiveFormsComponent,
//   // Quando a path inicia com valo vazio
//   pathMatch: 'full'
// },

const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
// Várias validações podem ser feitas no canActivate, motivo de ser usado o []
{ path: 'account', component: AccountComponent, pathMatch: 'full', canActivate: [CanActiveGuard], canDeactivate: [CanDeactiveGuard] },
// Rota filha
{ path: 'sobre', component: SobreComponent, children: [{path: ':id/:username', component: SobreComponent}] },

{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

{ path: '404', component: NotFoundComponent },
// Para não quebrar quando entra numa rota inexistente, redirecionando assim para a 404 que renderiza meu componente de not fount
{ path: '**', redirectTo: '404' },
];

@NgModule({
  // http://localhost:4200/#/
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


