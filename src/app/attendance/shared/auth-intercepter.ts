import {HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
export class AuthInterceptor implements HttpInterceptor {
 
    constructor() {}
   
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      // Get the auth token from the service.
      const authToken = "stored-token-3234323";
   
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
   
      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }
  }