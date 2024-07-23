import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado= true; //booleana para manejo de registro y el inicio de sesión
  deslogueado= false; //booleana para manejo de cierre de sesión
constructor(
  public servivioAuth: AuthService,
  public servicioRutas: Router
){}

  //función "ingresar" invierte los valores
  ingresar(){
    this.logueado = false;
    this.deslogueado = true;
  };
  cerrarSesion(){
    this.deslogueado = false;
    this.logueado = true;
    
    this.servivioAuth.cerrarSesion();
    this.servicioRutas.navigate(['/'])
  
  };

}
