import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
//componentes de angular material
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


// Componente de Angular
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    //InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    RegistroComponent,
    //InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ]
})
export class AutentificacionModule { }