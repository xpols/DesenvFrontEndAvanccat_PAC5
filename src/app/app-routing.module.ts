import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetaillComponent } from './poke-detaill/poke-detaill.component';

const routes: Routes = [
  {
    path: '',
    component: PokeListComponent,
  },
  {
    path: 'detaill/:id',
    component: PokeDetaillComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
