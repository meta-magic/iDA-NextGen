import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class SharedService {

    constructor(private http: HttpClient, private cookieSvc: CookieService) {

    }
    


    fetchMenus() {
        const url = environment.menus;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url, httpOptions);
    }
 

    fetchCountrys() {
        const url = environment.countryList;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url, httpOptions);
    }

    fetchStates(country: string) {
        const url = environment.stateList.replace("{countryId}",country);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url, httpOptions);
    }

    fetchCities(country: string, state: string) {
        const url = environment.cityList.replace("{countryId}",country).replace("{stateId}",state);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url, httpOptions);
    }

    fetchImportedDevices(){
        const url = environment.importedDevice;

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };

        return this.http.get<any>(url,httpOptions);
    }

    
    fetchguidList(){
        const url = environment.guidList;

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };

        return this.http.get<any>(url,httpOptions);
    }

    fetchassessmentTypeList(){
        const url = environment.assessmentType;

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };

        return this.http.get<any>(url,httpOptions);
    }

    fetchProxyType(){
        const url = environment.proxyType;
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url,httpOptions);
    }
    
    
    fetchProductType(){
        const url = environment.productType;
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url,httpOptions);
    }

    fetechDeviceType(){
        const url = environment.deviceTypes;
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url,httpOptions);
    }

    
    fetechOsVersionList(){
        const url = environment.osVersions;
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url,httpOptions);
    }

    
    fetechFilterList(){
        const url = environment.filterList;
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':this.cookieSvc.get('customtoken')
            })
        };
        return this.http.get<any>(url,httpOptions);
    }
}