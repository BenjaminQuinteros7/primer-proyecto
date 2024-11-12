import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';

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

  stock: number = 0;

  constructor(public servicioCrud: CrudService, public servicioCarrito:CarritoService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
    this.servicioCarrito.iniciarCarrito(); 
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

    const stockDeseado = Math.trunc(this.stock);
    if (stockDeseado <= 0 || stockDeseado>info.stock) {
      Swal.fire({
        title: 'Error al agregar el producto',
        text:'El stock ingresado no es válido, por favor ingresar un valor válido',
        icon: 'error'
      })
    } else {
      this.servicioCarrito.crearPedidos(info,stockDeseado);
    }


  }




}
