import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peliculas } from '../shared/models/peliculas.model';
import { PeliculasService } from '../shared/services/peliculas.service';

//traducciones
import {TranslateService} from '@ngx-translate/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  state:  'loading' | 'loaded' | 'error' = 'loading';
  lang: string;
  headers;



  peliculasPadre: Peliculas[] = [];

  constructor( private peliculasService: PeliculasService,
                private route: Router,
                translate: TranslateService,
                private http: HttpClient ) {



                }




  ngOnInit() {

    this.lang = localStorage.getItem('lang') || 'es';



    this.obtenerPelis();

  }


  changeLen(lang){
    console.log(lang);
    localStorage.setItem('lang',lang);
    window.location.reload();

  }

  obtenerPelis(){
    this.peliculasService.getPeliculas().subscribe( (pelis: Peliculas[]) => {

      this.peliculasPadre = pelis
      console.log(this.peliculasPadre)
      this.state = 'loaded'

    }, (error) => {
      console.log(error)
      this.state = 'error'

    })
  }

  crearNuevaPeli(){

    this.route.navigate(['/crear-pelicula'])

  }

}
