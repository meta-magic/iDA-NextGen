import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { lbTableResponse } from '../model/lbTable.model';

@Injectable({
  providedIn: 'root'
})
export class lbTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchLBTableDetails(){
    const url = environment.envForLoadBalancer;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<lbTableResponse>(url,httpsOtions);
  }
}
