import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//archivo de rutas hijas
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//vistas de autentificación
import { RegistrComponent } from './page/registro/registr.component';
import { InicioSesionComponent } from './page/inicio-sesion/inicio-sesion.component';
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
    RegistrComponent,
    InicioSesionComponent
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
    RegistrComponent,
    InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ]
})
export class AutentificacionModule { }
