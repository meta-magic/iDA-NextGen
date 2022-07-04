import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { PortDeviceListColumnResponse } from '../model/portSummaryDeviceListColumn.model';


@Injectable({
    providedIn: 'root'
  })
  export class portDeviceListColumnService {
  
    constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }
  
    fetchDeviceList(){
      const url = environment.portSummaryDeviceList;
  
      const httpsOtions ={
        headers:new HttpHeaders({
          'content-Type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
  
      return this.httpClient.get<PortDeviceListColumnResponse>(url,httpsOtions);
    }
  }