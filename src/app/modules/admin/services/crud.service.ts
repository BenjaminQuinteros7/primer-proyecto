import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //definimos colección para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto');
  }

  //crear productos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos número de identificativo para el producto en la base de datos
        const idProducto = this.database.createId();
        //asignamos ID creado al atributo idProducto de la interfaz producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        resolve(resultado);
      }
      catch (error) {
        reject(error);
      }
    })
  };
  
  //obtener productos
  obtenerProductos() {
  /* 
  _ snapshotChanges() => Toma captura del estado de los datos (en ese momento exacto).
  _ pipe => Tuberías que retornan un nuevo arreglo.
  _ map => "Mapea" o recorre/lee esa nueva información (esta viene o se transporta por "pipe").
  _ a => Resguarda la nueva información. 
  */
  return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  };

  //editar productos
  //eliminar productos
}
