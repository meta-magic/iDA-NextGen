import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkDeviceService {

  
  addNewDevProfile = new Subject<String>(); 
  newDevProfileEmitter = new Subject<String>();


  addNewDevProfile2 = new Subject<String>(); 
  newDevProfileEmitter2 = new Subject<String>();


  
  constructor(private httpClient:HttpClient,private cookiservice:CookieService) { }

  addNetWorkDevice = new Subject<any>();

  fetchNetworkDevices(){
    const url = environment.networkDevices;

    const httpsOtions ={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<any>(url,httpsOtions);
  }

  fetchLocation(){
    
    const url = environment.location;
    const httpOptions={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':this.cookiservice.get('customtoken')
      })
    };

    return this.httpClient.get<any>(url,httpOptions)
  }

  
  getFilesystem() {
      const url = environment.locations;
      const httpOptions={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
      return this.httpClient.get<any>(url,httpOptions)
    }

    fetchLocation1(){
    
      const url = environment.files;
      const httpOptions={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':this.cookiservice.get('customtoken')
        })
      };
  
      return this.httpClient.get<any>(url,httpOptions)
    }
  

    // getLazyFilesystem() {
    // return this.httpClient.get<any>('assets/filesystem-lazy.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }
  
}
