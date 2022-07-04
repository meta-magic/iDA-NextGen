import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { psnTableResponse } from '../model/psnTable.model';

@Injectable({
  providedIn: 'root'
})
export class psnTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchPSNTableDetails(){
    const url = environment.envForPSN;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<psnTableResponse>(url,httpsOtions);
  }
}
