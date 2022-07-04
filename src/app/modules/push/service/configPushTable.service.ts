import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { configListResponse } from '../model/configPushTable.model';

@Injectable({
  providedIn: 'root'
})
export class configPushTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchConfigPushDetails(){
    const url = environment.environmentForConfigPush;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<configListResponse>(url,httpsOtions);
  }
}
