import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { PortDevDetailsResponse } from '../model/portDevDetails.model';

@Injectable({
  providedIn: 'root'
})
export class portDevDetailsService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchPortDevDetails(){
    const url = environment.envForPortDevDetails;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<PortDevDetailsResponse>(url,httpsOtions);
  }
}
