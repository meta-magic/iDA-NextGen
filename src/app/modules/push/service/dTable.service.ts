import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { DeviceListResponse } from '../model/dTable.model';

@Injectable({
  providedIn: 'root'
})
export class dTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchAllDeviceDetails(){
    const url = environment.manageDeviceConfiguration;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<DeviceListResponse>(url,httpsOtions);
  }
}
