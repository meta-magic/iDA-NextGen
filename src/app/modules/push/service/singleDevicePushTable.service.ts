import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { SingleDeviceListResponse } from '../model/singleDevicePushTable.model';

@Injectable({
  providedIn: 'root'
})
export class singleDevicePushTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchAllSingleDeviceDetails(){
    const url = environment.environmentForSingleDevicePush;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<SingleDeviceListResponse>(url,httpsOtions);
  }
}
