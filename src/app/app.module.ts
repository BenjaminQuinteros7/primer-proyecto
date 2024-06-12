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

//firebase
import { environmet } from "src/environments/environmet";//vincula la base de datos con la app
import { AngularFireModule } from "@angular/fire/compat";//trabaja con las colecciones de información
import { AngularFireAuthModule } from "@angular/fire/compat/auth";//trabaja con la autentificación
import { AngularFireStorageModule } from "@angular/fire/compat/storage";//trabaja con imágenes y archivos


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
    BrowserAnimationsModule,

    //componentes globales
    SharedModule,

    //vinculación con firebase
    AngularFireModule.initializeApp(environmet.firebaseConfig), //inicializa firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
