import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { portResponse } from '../model/newPortSummaryReport.model';

@Injectable({
  providedIn: 'root'
})
export class portService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchPortDetails(){
    const url = environment.newPortSummany;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<portResponse>(url,httpsOtions);
  }
}
