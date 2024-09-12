import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)
  const loggedData = localStorage.getItem('loginUser')
  if (loggedData != null) {
    debugger
    return true
  }else{
    debugger
    router.navigateByUrl('login')
    return false;

  }
};
