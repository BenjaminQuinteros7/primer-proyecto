import { Injectable } from '@angular/core';
//cloud firestore -> accedemos a la colecciones
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos de forma privada la colección de usuarios para que no sea accesible en toda la aplicaión. Lo definimos como una colección de Firestore que respete la estructura de nuestra interfaz "Usuario".
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    //usuariosCollection va a definir la nueva colección "usuarios" que estará en nuestra base de datos.
    this.usuariosCollection = this.database.collection<Usuario>("usuarios");
   }
}
