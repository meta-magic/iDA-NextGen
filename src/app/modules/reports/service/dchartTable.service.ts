import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { dchartTableResponse } from '../model/dchartTable.model';

@Injectable({
  providedIn: 'root'
})
export class dchartTableService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchDchartTableDetails(){
    const url = environment.envForDChartTable;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<dchartTableResponse>(url,httpsOtions);
  }
}
