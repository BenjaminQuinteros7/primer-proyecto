/*
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  
  //###################LOCAL
  // definimos colección local de usuarios
  public coleccionUsuariosLocales: Usuario[];
  


  constructor() {
    this.coleccionUsuariosLocales = [
      {
        Uid: '',
        Nombre: "Santiago",
        Apellido: "López",
        Email: "lopez@gmail.com",
        Rol: "admimistrador",
        Password: "123456"
      },
    ],
      [
        {
          Uid: '',
          Nombre: "Jeremias",
          Apellido: "Pérez",
          Email: "perez@gmail.com",
          Rol: "administrador",
          Password: "121212"
        },
      ],
      [
        {
          Uid: '',
          Nombre: "Nacho",
          Apellido: "Martinez",
          Email: "martinez@gmail.com",
          Rol: "administrador",
          Password: "12345678"
        },
      ]
    }

  //función para verificar inicio de sesión.
  //definimos la interfaz de usuario
  usuarios: Usuario = {
    Uid: '', // Usamos comillas simples porque es STRING.
    Nombre: '',
    Apellido: '',
    Email: '',
    Rol: '',
    Password: ''
  };

  //recibirá la información que ingresa el usuario
  iniciarSesion() {
    const credenciales = {
      Uid: this.usuarios.Uid,
      Nombre: this.usuarios.Nombre,
      Apellido: this.usuarios.Apellido,
      Email: this.usuarios.Email,
      Rol: this.usuarios.Rol,
      Password: this.usuarios.Password,
    };

    //repetitiva para recorrer la colección de usuarios locales
    for (let i = 0; i < this.coleccionUsuariosLocales.length; i++) {

      const usuarioLocal = this.coleccionUsuariosLocales[i];

      //enviamos la nueva información como un nuevo objeto.
      this.coleccionUsuariosLocales.push(credenciales)

      //condicional para verificar la existencia del usuario ingresado
      if (usuarioLocal.Nombre === credenciales.Nombre
        && usuarioLocal.Apellido === credenciales.Apellido
        && usuarioLocal.Email === credenciales.Email
        && usuarioLocal.Rol === credenciales.Rol
        && usuarioLocal.Password === credenciales.Password) {
        alert("Inició sesión correctamente")
        break; //paramos la función con "break"
      } else {
        alert("No fue posible iniciar sesión")
      };
    };
  };
  //función para vaciar los inputs del formulario
  limpiarinputs() {
    /* en constante "inputs" llamamos a los atributos y los inicializamos como vacíos *//*
    const inputs = {
      Uid: this.usuarios.Uid = '', // Usamos comillas simples porque es STRING
      Nombre: this.usuarios.Nombre = '',
      Apellido: this.usuarios.Apellido = '',
      Email: this.usuarios.Email = '',
      Rol: this.usuarios.Rol = '',
      Password: this.usuarios.Password = ''
    };
  };
};
*/