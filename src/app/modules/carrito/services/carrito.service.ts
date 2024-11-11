import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { Route, Router } from '@angular/router';
import { map, pipe } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //creamos el modelo que va a recibir los datos del pedido que subirá a la base de datos
  pedido: Pedido = {
    idPedido: '',
    producto: {
      idProducto: '',
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: '',
      alt: '',
      stock: 0
    },
    cantidad: 0,
    total: 0
  }

  private pedidosColeccion: AngularFirestoreCollection<Pedido>
  private uid: string | null = null


  constructor(private servicioAuth: AuthService, private servicioFirestore: AngularFirestore, public servicioRutas: Router) {
    //creamos la subcolección dentro de la colección de usuarios y le damos ese valor a pedidosColeccion
    this.pedidosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
  }

  //inicializa el carrito y la subcolección de pedidos
  iniciarCarrito() {
    this.servicioAuth.obtenerUid().then(uid => {
      this.uid = uid
      if (this.uid === null) {
        console.error("no se obtuvo el UID, intente iniciar sesión");
        this.servicioRutas.navigate(['inicio-sesion']);
      } else {
        this.pedidosColeccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
      }
    })
  }

  //obtiene los productos que ya estén dentro del pedido
  obtenerCarrito() {
    return this.pedidosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  crearPedidos(producto: Producto, stock: number) {
    try {
      const idPedido = this.servicioFirestore.createId();

      this.pedido.idPedido = idPedido;
      this.pedido.producto = producto;
      this.pedido.cantidad = stock;
      this.pedido.total = producto.precio * stock;

      this.pedidosColeccion.doc(idPedido).set(this.pedido)
 
    } catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: '¡Ha ocurrido un error al subir su producto \n!' + error,
        icon: 'error'
      })
    }
  }

  borrarPedido(pedido:Pedido){
    try {
      this.pedidosColeccion.doc(pedido.idPedido).delete();

      Swal.fire({
        title:`${pedido.producto.nombre} ha sido borrado`,
        text: '¡Ha borrado el producto con éxito!',
        icon:'info'
      })
    } catch (error) {
      Swal.fire({
      title:'¡Oh no!',
      text: '¡Ha ocurrido un error: \n'+error,
      icon:'error'
    });
    }
  }

}
