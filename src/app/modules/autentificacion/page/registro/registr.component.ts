import { Component } from '@angular/core';
import { Usuario } from "src/app/models/usuario";
@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {
  hide = true;

  //importamos la interfaz de usuario(inicializamos)
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

  // Función para el registro de nuevos usuarios
  registrar() {
    // constante credenciales va a resguardar la información que ingrese el ususario
    const credenciales = {
      Uid: this.usuarios.Uid, //definimos al atributo de la interfaz con una variable local
      Nombre: this.usuarios.Nombre,
      Apellido: this.usuarios.Apellido,
      Email: this.usuarios.Email,
      Rol: this.usuarios.Rol,
      Password: this.usuarios.Password,
    };

    //enviamos la nueva información como un nuevo objeto a la colección de usuarios
    this.coleccionUsuarios.push(credenciales)
    
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
