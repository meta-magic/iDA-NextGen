import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { NdComplianceReportDeviceListColumnResponse } from '../model/ndComplanceReportListColumn.model';

@Injectable({
  providedIn: 'root'
})
export class ndcrListService {

  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  fetchNdcrListDetails(){
    const url = environment.envForNdComplainceReport;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<NdComplianceReportDeviceListColumnResponse>(url,httpsOtions);
  }
}
