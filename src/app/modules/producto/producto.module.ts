import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
//componentes locales
import { CardComponent } from './components/card/card.component';
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardPantalonesComponent } from './components/card-pantalones/card-pantalones.component';
import { CardBotinesComponent } from './components/card-botines/card-botines.component';
import { CardCamperasComponent } from './components/card-camperas/card-camperas.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AlimentacionComponent,
    IndumentariaComponent,
    JugueteComponent,
    CardComponent,
    CardIndumentariaComponent,
    CardPantalonesComponent,
    CardBotinesComponent,
    CardCamperasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  exports:[
    ProductoComponent,
    AlimentacionComponent,
    IndumentariaComponent,
    JugueteComponent,
    CardComponent,
    CardIndumentariaComponent,
    CardPantalonesComponent
  ]
})
export class ProductoModule { }
