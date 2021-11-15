import { Injectable } from '@angular/core';
import { Rutas } from '../models/rutas.model';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  rutas: Rutas[] = [
    { title: 'Peliculas', url: '/peliculas', icon: 'play' },
    { title: 'Crear Pelicula', url: '/crear-pelicula', icon: 'enter' },
  ];

  constructor() { }

 getRutas(){
   return this.rutas;
 }

}
