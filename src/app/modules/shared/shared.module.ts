import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
/*
import { RegistroComponent } from '../autentificacion/registro/registro.component';
import { InicioRoutingModule } from '../inicio/inicio-routing.module';
*/



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    /*RegistroComponent,
    InicioRoutingModule*/
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
