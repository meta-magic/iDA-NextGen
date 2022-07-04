import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ndfResponse } from '../model/ndfTable.model';

@Injectable({
  providedIn: 'root'
})
export class ndfTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchNdfDetails(){
    const url = environment.enfForNdf;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<ndfResponse>(url,httpsOtions);
  }
}
