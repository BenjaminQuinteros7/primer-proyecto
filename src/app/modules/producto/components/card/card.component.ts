import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  //variable local para manejar el estado de un modal
  modalVisible: boolean = false;
  //booleano para manejar la visibilidad de "última compra"
  compraVisible: boolean = false;

  //directivas para comunicarse con el componente padre
  @Input() productoReciente: string = '';
  @Output() productoAgregado = new EventEmitter<Producto>(); //@Output será definido como un nuevo evento

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
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

  agregarProducto(info: Producto) {
    this.productoAgregado.emit(info); //enviamos información del producto agregado
    this.compraVisible = true;
  }



  
}
