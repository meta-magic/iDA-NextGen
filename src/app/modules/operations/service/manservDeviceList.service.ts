import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ManServDeviceListColumnResponse } from '../model/manageTemplateListColumn.model';


@Injectable({
    providedIn: 'root'
  })
  export class manservDeviceListColumnService {
  
    constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

    addNewServTemp = new Subject<String>(); 
    newServTempEmitter = new Subject<String>();

    // To Open Device info from Left Column Device List 
    addNewServTemp2 = new Subject<String>(); 
    newServTempEmitter2 = new Subject<String>();
  
    fetchManServDeviceList(){
      const url = environment.environmentForManageServTemplate;
  
      const httpsOtions ={
        headers:new HttpHeaders({
          'content-Type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
  
      return this.httpClient.get<ManServDeviceListColumnResponse>(url,httpsOtions);
    }
  }