import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //definimos coleccion de productos seleccionados
  coleccionProductos: Producto[] = [];

  //variable local para seleccionar un producto especifíco
  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProductos().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  //función para mostrar mas información de los productos
  mostrarVer(info: Producto) {
    //cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;

    //guardo en variable seleccionado la información de producto elegido
    this.productoSeleccionado = info;
  }
}
