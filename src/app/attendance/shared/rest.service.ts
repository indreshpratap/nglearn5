import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  fetch(url) {
//    let httpOptions= { headers: new HttpHeaders({
//         'MyCustomHeader':  'application/json',
//         'Authorization': 'my-auth-token'
//       })
//     };
    // return this.transform(this.http.get(this.getUrl(url),httpOptions));
    return this.transform(this.http.get(this.getUrl(url)));
  }

  post(url, data) {
    return this.transform(this.http.post(this.getUrl(url), data));
  }

  private getUrl(path) {
    return `${environment.apiPath}${path}`;
  }

  private transform(ob: Observable<any>) {
    return ob.map(data => {
      return { status: true, data: data };
    });
  }
}
