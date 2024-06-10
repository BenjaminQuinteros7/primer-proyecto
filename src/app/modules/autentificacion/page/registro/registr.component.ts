import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//imoprtamos servicio de autentificación
import { AuthService } from '../../services/auth.service';
//importamos componentes de rutas 
import { Router } from '@angular/router';
@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})

export class RegistrComponent {
  hide = true;
  //importaciones de interfaz de "usuario"
  //importamos la interfaz de usuario (inicializamos)
  usuarios: Usuario = {
    Uid: '', // Usamos comillas simples porque es STRING
    Nombre: '',
    Apellido: '',
    Email: '',
    Rol: '',
    Password: ''
  };

  // Creamos colección de usuarios, tipo "Usuario", para arreglos(arrays)
  coleccionUsuarios: Usuario[] = [];
  //fin de importaciones

  constructor(public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  // Función para el registro de nuevos usuarios
  async registrar() {
    /*
    //esto es el registro local
    // constante credenciales va a resguardar la información que ingrese el ususario
    const credenciales = {
      Uid: this.usuarios.Uid, //definimos al atributo de la interfaz con una variable local
      Nombre: this.usuarios.Nombre,
      Apellido: this.usuarios.Apellido,
      Email: this.usuarios.Email,
      Rol: this.usuarios.Rol,
      Password: this.usuarios.Password,*/

      //registro con servicio de Auth
      const credenciales = { 
        Email: this.usuarios.Email,
        Password: this.usuarios.Password
    };

    const res = await this.servicioAuth.registrar(credenciales.Email, credenciales.Password).
    //el método "then" es una promesa que devuelve el mismo valor si todo sale bien
    then(res=>{
      alert("HA SIDO REGISTRADO CON ÉXITO");
      //el método navigate nos direcciona a otra vista
      this.servicioRutas.navigate(['/inicio']);
    })
    //el método catch captura una falla y la vuelve un error cuando la promesa sale mal
    .catch(error=>{alert("OCURRIÓ UN ERROR AL REGISTRAR EL USUARIO \n"+error);
    });

    /*
    //enviamos la nueva información como un nuevo objeto a la colección de usuarios
   // this.coleccionUsuarios.push(credenciales)
   */

    //notificamos al usuario que pudo registrarse con éxito
    alert("Ha sido registrado con éxito")


    //llamamos a la función para ejecutarla
    this.limpiarinputs();

    //mostramos credenciales por consola
    /*console.log(credenciales);
    console.log(this.coleccionUsuarios);
  };*/

  };

  //función para vaciar los inputs del formulario
  limpiarinputs() {
    /* en constante "inputs" llamamos a los atributos y los inicializamos como vacíos */
    const inputs = {
      Uid: this.usuarios.Uid = '', // Usamos comillas simples porque es STRING
      Nombre: this.usuarios.Nombre = '',
      Apellido: this.usuarios.Apellido = '',
      Email: this.usuarios.Email = '',
      Rol: this.usuarios.Rol = '',
      Password: this.usuarios.Password = ''
    }
  }
}
