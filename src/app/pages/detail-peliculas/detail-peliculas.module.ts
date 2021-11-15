import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPeliculasPageRoutingModule } from './detail-peliculas-routing.module';

import { DetailPeliculasPage } from './detail-peliculas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    DetailPeliculasPageRoutingModule
  ],
  declarations: [DetailPeliculasPage]
})
export class DetailPeliculasPageModule {}
