import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-botines',
  templateUrl: './card-botines.component.html',
  styleUrls: ['./card-botines.component.css']
})
export class CardBotinesComponent {

  coleccionProductos: Producto[] = [];
  coleccionJuguete: /*botines*/ Producto[] = [];
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    //accedemos a método 'obtenerProductos'
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      //mostrará la colección de esa categoría hasta el momento
      this.mostrarProductosJuguete()
    })
  }

  //función para filtrar los productos de tipo "alimentación"
  mostrarProductosJuguete() {
    //iteramos colección de productos con un "forEach"
    this.coleccionProductos.forEach(producto => {
      //si es del tipo "alimentacion" => condicional
      if (producto.categoria === "juguete") {
        //lo sube/guarda en la colección de productos de tipo "alimentación"
        this.coleccionJuguete.push(producto);
      }
    })
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }
}
