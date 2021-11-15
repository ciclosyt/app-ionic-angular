import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPeliculaPage } from './crear-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPeliculaPageRoutingModule {}
