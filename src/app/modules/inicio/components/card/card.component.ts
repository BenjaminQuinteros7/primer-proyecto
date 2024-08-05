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
         precio: 85000,
         imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg",
         alt: "Camiseta Argentina"
       },
       {
         id: "",
         nombre: "Pantalón corto Argentina",
         precio: 45000,
         imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e12f4c5d9a3c47bab70367385042c64e_9366/Shorts_Titular_Blanco_Argentina_24_Blanco_IP8404_01_laydown.jpg",
         alt: "Pantalón corto Argentina"
       },
       {
         id: "",
         nombre: "Campera Argentina",
         precio: 100000,
         imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bde25472b0149ee9a13e3e6c18f1734_9366/Campera_Presentacion_Argentina_24_Gris_IQ0805_01_laydown.jpg",
         alt: "Campera Argentina"
       }
     ]
   }
}
