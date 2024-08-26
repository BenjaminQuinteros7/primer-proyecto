import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-indumentaria',
  templateUrl: './card-indumentaria.component.html',
  styleUrls: ['./card-indumentaria.component.css']
})
export class CardIndumentariaComponent {

  coleccionProductos: Producto[] = [];
  coleccionAlimentacion: Producto[] = [];
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    //accedemos a método 'obtenerProductos'
    this.servicioCrud.obtenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;
      //mostrará la colección de esa categoría hasta el momento
      this.mostrarProductosAlimentacion()
    })
  }

//función para filtrar los productos de tipo "alimentación"
  mostrarProductosAlimentacion() {
    //iteramos colección de productos con un "forEach"
    this.coleccionProductos.forEach(producto => {
      //si es del tipo "alimentacion" => condicional
      if (producto.categoria === "alimentacion") {
        //lo sube/guarda en la colección de productos de tipo "alimentación"
        this.coleccionAlimentacion.push(producto);
      }
    })
  }

  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado = info;
  }
}
