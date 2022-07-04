import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { MultipleDeviceListResponse } from '../model/multipleDevicePushTable.model';

@Injectable({
  providedIn: 'root'
})
export class multipleDevicePushTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchAllMultipleDeviceDetails(){
    const url = environment.environmentForMultipleDevicePush;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<MultipleDeviceListResponse>(url,httpsOtions);
  }
}
