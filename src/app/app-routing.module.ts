import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ListThoughtsComponent } from './components/list-thoughts/list-thoughts.component';
import { DeleteThroughtComponent } from './components/delete-throught/delete-throught.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: ThoughtsComponent },
  { path: 'listarPensamento', component: ListThoughtsComponent },
  {
    path: 'pensamento/excluirPensamento/:id',
    component: DeleteThroughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
