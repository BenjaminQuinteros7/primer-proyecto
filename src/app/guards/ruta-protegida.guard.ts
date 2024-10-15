import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { from, map, of, switchMap } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  //inyectamos/instanciamos servicio de autentificación en el guardián (forma local)
  const servicioAuth = inject (AuthService)
    
  //inyectamos/instanciamos servicio de rutas (forma local)
    const servicioRutas = inject (Router)

  //especificamos cual es el rol que va esperar el guardián para activarse
  const rolEsperado = "admin";

  return true;
};
