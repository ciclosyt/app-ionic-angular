/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

//traducciones
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';





export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
              AppRoutingModule,
              HttpClientModule,
              SharedModule,
              TranslateModule.forRoot({
                loader: {
                  provide: TranslateLoader,
                  useFactory: createTranslateLoader,
                  deps: [HttpClient]
                }
              })


  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
             }],
  bootstrap: [AppComponent],
})
export class AppModule {}
