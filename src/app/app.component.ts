import { Component, OnInit } from '@angular/core';
import { Rutas } from './shared/models/rutas.model';
import { RutasService } from './shared/services/rutas.service';
//traducciones
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

   rutasApp: Rutas[] = [];


  constructor( private rS: RutasService,
                public translate: TranslateService ) {
                  
    this.translate.setDefaultLang('es');
    this.translate.use(localStorage.getItem('lang') || 'es');

                }


  ngOnInit(): void {
    this.rutasApp = this.rS.getRutas();
  }


}
