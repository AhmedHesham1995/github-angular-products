import { CanActivateFn, Router } from '@angular/router';
import { UserAuthComponent } from '../components/user-auth/user-auth.component';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const usersService=inject(UserAuthService);
  const router=inject(Router)

  if(usersService.isUserLogged){
    return true
  }
  else{
    alert('please log in first')
    router.navigate(['/userLogIn'])
    return false
  }
};
