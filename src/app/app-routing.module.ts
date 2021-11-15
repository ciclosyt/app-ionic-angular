import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'peliculas',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'crear-pelicula',
    loadChildren: () => import('./pages/crear-pelicula/crear-pelicula.module').then( m => m.CrearPeliculaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
