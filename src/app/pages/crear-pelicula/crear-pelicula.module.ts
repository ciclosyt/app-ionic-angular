import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPeliculaPageRoutingModule } from './crear-pelicula-routing.module';

import { CrearPeliculaPage } from './crear-pelicula.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    CrearPeliculaPageRoutingModule
  ],
  declarations: [CrearPeliculaPage]
})
export class CrearPeliculaPageModule {}
