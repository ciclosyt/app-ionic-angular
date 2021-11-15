import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPeliculasPage } from './detail-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPeliculasPageRoutingModule {}
