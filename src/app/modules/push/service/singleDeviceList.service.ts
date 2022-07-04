import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { SingleDeviceListColumnResponse } from '../model/singleDeviceListColumn.model';


@Injectable({
    providedIn: 'root'
  })
  export class singleDeviceListColumnService {
  
    constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }
  
    fetchDeviceList(){
      const url = environment.environmentForDeviceListInPush;
  
      const httpsOtions ={
        headers:new HttpHeaders({
          'content-Type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
  
      return this.httpClient.get<SingleDeviceListColumnResponse>(url,httpsOtions);
    }
  }