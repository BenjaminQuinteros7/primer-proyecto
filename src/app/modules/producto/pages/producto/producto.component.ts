import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //string que modificará el valor de @Input en el componente hijo
  product: string = '';
  //colección de productos añadidos a la lista
  productosCarrusel: Producto[] = [];

  productoAnadido(producto: Producto) {
    //reemplazamos el valor de product
    this.product = `${producto.nombre} : $${producto.precio}`;

    try {//agregamos la información recibida por el parámetro de la función a la colección del carrusel 
      this.productosCarrusel.push(producto);

      Swal.fire({
        title: 'muy bien',
        text: 'bien se añadió tu producto con éxito',
        icon: 'info'
      })
    }
    catch (error) {
      Swal.fire({
        title: 'oh nooooooooooouuuuuuuuuuuu',
        text: 'ehhh error\n' + error,
        icon: 'error'
      })
    }
  }
}
