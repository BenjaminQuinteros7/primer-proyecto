import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { indumentaria } from 'src/app/models/indumentaria';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: indumentaria[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: "Camiseta Argentina",
         precio: 5,
         imagen: "https://i1.sndcdn.com/artworks-000190784980-i4qoly-t500x500.jpg",
         alt: "Camiseta Argentina"
       },
       {
         id: "",
         nombre: "Pantalón corto Argentina",
         precio: 6,
         imagen: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1371102402-645cff2ca5a62.jpg?crop=0.665xw:1.00xh;0.224xw,0&resize=1200:*",
         alt: "Pantalón corto Argentina"
       },
       {
         id: "",
         nombre: "Campera Argentina",
         precio: 2,
         imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
         alt: "Campera Argentina"
       }
     ]
   }
}
