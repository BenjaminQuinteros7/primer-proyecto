import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ruta padre-> módulo raíz
import { AppRoutingModule } from './app-routing.module';
//archivo component general
import { AppComponent } from './app.component';
//solo importamos componentes globales
import { SharedModule } from './modules/shared/components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { InicioComponent } from './inicio/inicio.component';
//import { GaleriaComponent } from './galeria/galeria.component';

/*
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';*/

@NgModule({
  declarations: [
    AppComponent,
    //InicioComponent,
    //GaleriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
