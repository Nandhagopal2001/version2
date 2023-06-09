import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice: LoginService,private router:Router) { }

  canActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(this.loginservice.isuserloggedin()){
      this.router.navigate(["/login"],{queryParams:{returl:route.url}});
      return false;
    }
    else{

      return true;
    }
  }

}
