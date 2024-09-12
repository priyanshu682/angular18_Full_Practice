import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger
  const router = inject(Router)
  const loggedData = localStorage.getItem('loginUser')
  if (loggedData != null) {
    debugger
    return true
  } else{
    debugger
    router.navigateByUrl('login')
    return false;

  }
};
