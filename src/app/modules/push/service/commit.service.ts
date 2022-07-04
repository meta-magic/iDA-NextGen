import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { commitResponse } from '../model/commitTable.model';

@Injectable({
  providedIn: 'root'
})
export class commitService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchCommitDetails(){
    const url = environment.environmentForManageDeviceCommit;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<commitResponse>(url,httpsOtions);
  }
}
