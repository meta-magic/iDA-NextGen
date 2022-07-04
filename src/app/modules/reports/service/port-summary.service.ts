import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortSummaryService {

  backEmitter = new Subject<String>(); 

  generateReportEmitter = new Subject<String>(); 

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  
  fetchReports(){
    const url = environment.ganesh;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<any>(url,httpsOtions);
  }

  
  fetchportsusmmaryReports(){
    const url = environment.portSummaryReports;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<any>(url,httpsOtions);
  }
}
