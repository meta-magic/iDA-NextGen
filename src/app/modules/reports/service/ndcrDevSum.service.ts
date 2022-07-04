import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ndcrDevSumResponse } from '../model/ndcrDevSum.model';

@Injectable({
  providedIn: 'root'
})
export class ndcrDevSumService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchNdcrDevSumDetails(){
    const url = environment.envForNdcrDevSum;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };
ndcrDevSumResponse
    return this.httpClient.get<ndcrDevSumResponse>(url,httpsOtions);
  }
}
