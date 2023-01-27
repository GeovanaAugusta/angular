import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [{
  path: '',
  // Dessa maneira não há necessidade de referenciar a tag do componente em questão no app.component
  component: ReactiveFormsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
