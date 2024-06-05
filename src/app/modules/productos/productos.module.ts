import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//archivo de rutas de módulo producto
import { ProductosRoutingModule } from './productos-routing.module';

//vistas
import { ProductosComponent } from './pages/productos/productos.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';


@NgModule({
  declarations: [
    ProductosComponent,
    JugueteComponent,
    IndumentariaComponent,
    AlimentacionComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    ProductosComponent,
    AlimentacionComponent,
    JugueteComponent,
    IndumentariaComponent
  ]
})
export class ProductosModule { }
