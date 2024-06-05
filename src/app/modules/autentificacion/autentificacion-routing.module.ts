import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrComponent } from './page/registro/registr.component';
import { InicioSesionComponent } from './page/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {
    path:"registro", component:RegistrComponent
  },
  {
    path:"InicioSesion", component:InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
