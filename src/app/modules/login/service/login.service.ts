import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    authenticate(user: string, passwor: string){
      const url  = environment.menus;
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.cookieService.get('customtoken')
          })
        };
      return this.http.get<any>(url,httpOptions);
    }
 

}