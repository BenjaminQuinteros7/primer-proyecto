import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
//operadores tipo "observables "
import { from, map, of, switchMap } from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  //inyectamos/instanciamos servicio de autentificación en el guardián (forma local)
  const servicioAuth = inject(AuthService)

  //inyectamos/instanciamos servicio de rutas (forma local)
  const servicioRutas = inject(Router)

  //especificamos cual es el rol que va esperar el guardián para activarse
  const rolEsperado = "admin";

  return from(servicioAuth.obtenerUid()).pipe(
    switchMap(uid => {
      if (uid) {
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {
              //si coincide el rol esperado, damos acceso al usuario
              console.log("usuario verificado como administrador");
              return true;
            } else {
              //denegamos el acceso al usuario
              return false
            }
          })
        )
      } else {
        console.log("usuario no validado. Permisos insuficientes");
        return of(servicioRutas.createUrlTree(['/inicio']));
      }
    })
  )
};
