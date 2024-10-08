import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-card-pantalones',
  templateUrl: './card-pantalones.component.html',
  styleUrls: ['./card-pantalones.component.css']
})
export class CardPantalonesComponent {

  coleccionProductos: Producto[] = [];
  coleccionIndumentaria /*pantalones*/: Producto[] = [];
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    //accedemos a método 'obtenerProductos'
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      //mostrará la colección de esa categoría hasta el momento
      this.mostrarProductosIndumentaria()
    })
  }

  //función para filtrar los productos de tipo "alimentación" (pantalones)
  mostrarProductosIndumentaria() {
    //iteramos colección de productos con un "forEach"
    this.coleccionProductos.forEach(producto => {
      //si es del tipo "alimentacion" => condicional
      if (producto.categoria === "alimentacion") {
        //lo sube/guarda en la colección de productos de tipo "alimentación" (pantalones)
        this.coleccionIndumentaria.push(producto);
      }
    })
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }
}
