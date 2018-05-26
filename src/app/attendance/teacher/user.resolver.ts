import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../shared/rest.service';

@Injectable()
export class ResolveGuard implements Resolve<any> {
    constructor( private  rest:RestService){}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
     
    ): Observable<any> | Promise<any> | any {
        return this.rest.fetch("users");
    }
}
