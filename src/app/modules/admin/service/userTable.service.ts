import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { userTableResponse } from '../model/userTable.model';

@Injectable({
    providedIn: 'root'
  })
  export class userTableService {
  
    constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }
  
    fetchUserTableDetails(){
      const url = environment.envForUserManage;
  
      const httpsOtions ={
        headers:new HttpHeaders({
          'content-Type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
  
      return this.httpClient.get<userTableResponse>(url,httpsOtions);
    }
  }
  