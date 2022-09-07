import { LandPageComponent } from './land-page/land-page.component';
import { CadastroCursosComponent } from './cadastro-cursos/cadastro-cursos.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandPageComponent },
  { path: 'cadastrocursos/:id', component: CadastroCursosComponent },
  { path: 'cadastrocursos', component: CadastroCursosComponent },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
