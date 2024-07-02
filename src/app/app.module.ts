import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
//angular material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

*/


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

    /*
    MatIconModule,
    MatButtonModule, 
    */
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    /*
    MatIconModule,
    MatButtonModule,
    
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
