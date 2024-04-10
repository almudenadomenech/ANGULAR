import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

// Un guard que sirve para proteger rutas en base al rol del usuario.
export const roleAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  // Si el usuario es administrador entos se puede entrar en la pantalla
  if(authService.getIsAdmin()){
    return true;   
  } else {
    return router.navigate(['']); // Si no es admin entonces redirige a login
  }
 
};
