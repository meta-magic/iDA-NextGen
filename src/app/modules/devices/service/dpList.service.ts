import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { dpListResponse } from '../model/dpList.model';

@Injectable({
  providedIn: 'root'
})
export class dpListService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchDpListDetails(){
    const url = environment.envForDeviceProfile;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<dpListResponse>(url,httpsOtions);
  }
}
