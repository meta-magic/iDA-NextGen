import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceReadinessService {
  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchNetworkDevices(){
    const url = environment.deviceReadiness;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<any>(url,httpsOtions);
  }
}
