import { Injectable } from '@angular/core';
//servicio en la nube de autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //referenciar Auth de Firebase en el servicio
  constructor(public auth: AngularFireAuth) { }
  //función para registro
  registrar(email: string, password: string){
    //retorna el valor que es creado con el método "createUserWithEmailAndPassword"
    return this.auth.createUserWithEmailAndPassword(email,password)
  }
  //función para inicio de sesión
  iniciarSesion(email:string, password:string){
    //validar la información del usuario -> saber si existe en la colección
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  //función para cerrar de sesión
  cerrarSesion(){
    //devuelve una promesa vacía -> quita token
    return this.auth.signOut();
  }
  ////función para tomar el UID
}
