import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ndcrTableResponse } from '../model/ndcrTable.model';

@Injectable({
  providedIn: 'root'
})
export class ndcrTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchNdcrTableDetails(){
    const url = environment.envForNdcrTable;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<ndcrTableResponse>(url,httpsOtions);
  }
}
