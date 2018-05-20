import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGaurd implements CanActivate,CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       console.log("For child", state.url)
        return localStorage.getItem('token')!==null;
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):  boolean {
        console.log(route);
        console.log(state);
        return localStorage.getItem('token')!==null;
    }
}
