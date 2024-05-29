import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const LoginRegisterGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuth()) {
    return true;
  } else {
    const url = router.createUrlTree(['/home']);
    return url;
  }
}
