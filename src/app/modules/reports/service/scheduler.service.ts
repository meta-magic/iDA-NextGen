import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { schedulerResponse } from '../model/schedulerAssistent.model';

@Injectable({
  providedIn: 'root'
})
export class schedulerService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchValidateDetails(){
    const url = environment.environmentForSchedulerAssistent;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<schedulerResponse>(url,httpsOtions);
  }
}
