import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-camperas',
  templateUrl: './card-camperas.component.html',
  styleUrls: ['./card-camperas.component.css']
})
export class CardCamperasComponent {

  coleccionProductos: Producto[] = [];
  coleccionProducto: Producto[] = [];
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    //accedemos a método 'obtenerProductos'
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      //mostrará la colección de esa categoría hasta el momento
      this.mostrarProductosProducto()
    })
  }

//función para filtrar los productos de tipo "alimentación"
  mostrarProductosProducto() {
    //iteramos colección de productos con un "forEach"
    this.coleccionProductos.forEach(producto => {
      //si es del tipo "alimentacion" => condicional
      if (producto.categoria === "producto") {
        //lo sube/guarda en la colección de productos de tipo "alimentación"
        this.coleccionProducto.push(producto);
      }
    })
  }

  mostrarVer(info:Producto){
    this.modalVisible=true;
    this.productoSeleccionado = info;
  }
}
