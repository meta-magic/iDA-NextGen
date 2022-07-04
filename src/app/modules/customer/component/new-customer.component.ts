import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterMatchMode, FilterService, MenuItem, MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { SharedService } from '../../common/service/shared.service';
import { isemodel } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.scss'],
    styles: [`
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0rem;
        }

        .layout-news-active :host ::ng-deep .p-datatable tr > th {
            top: 7rem;
        }
    `]
})
export class NewCustomerComponent implements OnInit {

    loder: boolean = false;
    index: number = 0;

    // form: FormGroup;

    form = new FormGroup({
        customername: new FormControl(null, [Validators.required]),
        isesoft: new FormControl(null, null),
        street1: new FormControl(null, null),
        street2: new FormControl(null, null),
        countryId: new FormControl(null, null),
        stateId: new FormControl(null, null),
        cityId: new FormControl(null, null),
        zipcode: new FormControl(null, null)
    });
    //form1:FormGroup;

    // Customer Details First tab
    customerName: string = "";
    customerId: string = "";
    isesoftv: string = "";
    street1: string = "";
    street2: string = "";
    country: any[] = [];
    states: any[] = [];
    cities: any[] = [];

    zipcode: string = "";
    Delete = "Delete";
    //Customer Service Selection
    iseVersionlist: isemodel[] = [];
    compatibilityguide: [] = [];
    //Network Device
    assessmentType: any[] = [];
    uploaddevice: any[] = [];
    selectedIse: isemodel[] = [];
    selecteAllIse: boolean = false;
    proxyType: any[] = [];
    //Imported Device Model Table
    cols: any[] = [];
    selectedColumns: any[] = [];
    guideList: any[] = [];
    guid: string = "";
    uploadedFiles: any[] = [];
    importedDevices: any[] = [];
    selectedProducts: any;
    customername: any;
    isesoft: any;
    productType: any[] = [];
    selectGuid: any;
    matchModeOptions:SelectItem[];
    constructor(private msgSvc: MessageService, private cookieService: CookieService,
        private router: Router, private activatedroute: ActivatedRoute,
        private partnerSvc: CustomerService, private sharedSvc: SharedService, public confirmSvc: ConfirmationService,public filterService: FilterService) {

        this.form = new FormGroup({
            customername: new FormControl(null, [Validators.required]),
            isesoft: new FormControl(null, null),
            street1: new FormControl(null, null),
            street2: new FormControl(null, null),
            countryId: new FormControl(null, null),
            stateId: new FormControl(null, null),
            cityId: new FormControl(null, null),
            zipcode: new FormControl(null, null)
        });
        this.fetchImpotedDevices();
        this.selecteAllIse = false;
        this.fetchGuidList();
        this.fetchassessmentTypeList();
        this.fetchProxyType();
        this.fetchProductType();
        this.selectGuid = 1;
        
        this.iseVersionlist = [
            { id: "aaa", name: "Router" },
            { id: "aaa1", name: "BYOD" },
            { id: "aaa2", name: "MDM" },
            { id: "aaa3", name: "Profiling" },
            { id: "aaa4", name: "TrustSec" },
            { id: "aaa5", name: "Guest With web Audit" },
            { id: "aaa6", name: "Comp" },
            { id: "aaa7", name: "Outer" },
        ]
        this.Delete = "Delete";
        let state: any = this.router.getCurrentNavigation()?.extras.state;
        if (state && state.customerId && state.customerName) {
            this.customerId = state.customerId;
            this.customerName = state.customerName;
        } else {
            setTimeout(() => {
                // this.navigateToPartnerList();
            }, 200);
            this.msgSvc.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong, please renavigate from partners screen!' });
        }
        this.fetchCountry();
        this.fetchStates("ind");
        this.fetchCities("ind", "mh");

    }
    navigateToPartnerList() {
        this.router.navigate(['/home/customer/list']);
    }
    ngOnInit(): void {
        const customFilterName = "custom-equals";
    this.filterService.register(
      customFilterName,
      (value: any, filter: any): boolean => {
        if (filter === undefined || filter === null || filter.trim() === "") {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toString() === filter.toString();
      }
    );
    
    this.matchModeOptions = [
        { label: "Custom Equals", value: customFilterName },
        { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
        { label: "End With", value: FilterMatchMode.ENDS_WITH },
        { label: "Contains", value: FilterMatchMode.CONTAINS }
      ];
        this.cols = [
            { field: 'deviceName', header: 'Device Name' },
            { field: 'ipHostName', header: 'IP/HostName' },
            { field: 'deviceType', header: 'Device Type' },
            { field: 'producttype', header: 'Product Type' },
            { field: 'userName', header: 'User Name' },
            { field: 'password', header: 'Password' },
            { field: 'enablepassword', header: 'Enable Password' },
        ];
        this.selectedColumns = this.cols;
    }
    onStateSelect(data: any) {
        this.states.forEach(element => {
            if (element.id == data) {
                this.fetchCities(element.countryName, element.stateName);
            }
        });
    }
    fetchCountry() {
        this.loder = true;
        let response: any;
        this.country = [];

        this.sharedSvc.fetchCountrys()
            .subscribe((resp: any) => {
                response = resp;
            }, (error: any) => {
                this.loder = false;
                this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch countries, if problem persist please connect with admin!' });
            }, () => {
                if (response.success) {
                    this.country = response.data;
                }
                this.loder = false;
                if (this.country[0].primaryId && this.country[0].primaryId > 0) {
                    this.onCountrySelect(this.country[0].primaryId);
                }
            });
    }



    fetchCities(country: string, state: string) {
        this.loder = true;
        let response: any;
        this.cities = [];
        this.sharedSvc.fetchCities(country, state)
            .subscribe((resp: any) => {
                response = resp;
            }, (error: any) => {
                this.loder = false;
                this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
            }, () => {
                if (response.success) {
                    this.cities = response.data;
                }
                this.loder = false;
            });
    }

    clear(table: Table) {
        table.clear();
      }
    
      @Input() get SelectedColumns(): any[] {
        return this.selectedColumns;
      }
    
      set SelectedColumns(val: any[]) {
        //restore original order
        this.selectedColumns = this.cols.filter(col => val.includes(col));
      }

    fetchImpotedDevices() {
        this.loder = true;
        let response: any;
        this.importedDevices = [];
        this.sharedSvc.fetchImportedDevices()
            .subscribe((resp: any) => {
                response = resp;
            }, (error: any) => {
                this.loder = false;
                this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
            }, () => {
                if (response.success) {
                    this.importedDevices = response.data;
                }
                this.loder = false;
            });
    }

    selectallIseversions(ise: boolean) {
        this.selecteAllIse = ise;
    }
    onCountrySelect(data: any) {
        this.country.forEach(element => {
            if (element.id == data) {
                this.fetchStates(element.name);
            }
        });
    }
    fetchStates(country: string) {
        this.loder = true;
        let response: any;
        this.states = [];
        this.cities = [];
        this.sharedSvc.fetchStates(country)
            .subscribe((resp: any) => {
                response = resp;
            }, (error: any) => {
                this.loder = false;
                this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch states, if problem persist please connect with admin!' });
            }, () => {
                if (response.success) {
                    this.states = response.data;
                }
                this.loder = false;
                if (this.states[0].primaryId) {
                    this.onStateSelect(this.states[0].primaryId);
                }
            });
    }

    fetchGuidList() {
        this.loder = true;
        this.guideList = [];
        let response: any;
        this.sharedSvc.fetchguidList().subscribe((resp: any) => {
            response = resp;
        }, (error: any) => {
            this.loder = false;
            this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch states, if problem persist please connect with admin!' });
        }, () => {
            this.loder = false;
            if (response.success) {
                this.guideList = response.data;
            }
        })
    }
    save() { }
    reset() { }

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }

    onUpload() {
        // for(let file of event.files) {
        //     this.uploadedFiles.push(file);
        // }

        this.msgSvc.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    // items: MenuItem[];

    deleteProduct(amp: any) {

    }

    editProduct(amp: any) {
        this.productDialog = true;

    }

    importedDevice: any;
    productDialog: boolean = false;
    selectedDevice: any[] = [];
    submitted: boolean = false;
    deleteSelectedProducts() { }
    openNew() {
        this.importedDevice = {};
        this.submitted = false;
        this.productDialog = true;
    }
    saveProduct() {
    }
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    fetchassessmentTypeList() {
        this.loder = true;
        let response: any;
        this.assessmentType;
        this.sharedSvc.fetchassessmentTypeList().subscribe((resp) => {
            response = resp;
        }, (error) => { }, () => {
            if (response.success) {
                this.assessmentType = response.data;
            }
        })
    }

    fetchProxyType() {
        this.loder = true;
        let response: any;
        this.proxyType;
        this.sharedSvc.fetchProxyType().subscribe((resp) => {
            response = resp;
        }, (error) => { }, () => {
            if (response.success) {
                this.proxyType = response.data;
            }
        })
    }

    fetchProductType() {
        this.loder = true;
        let response: any;
        this.productType;
        this.sharedSvc.fetchProductType().subscribe((resp) => {
            response = resp;
        }, (error) => { }, () => {
            if (response.success) {
                this.productType = response.data;
            }
        })
    }
    onAssesmentType(primaryId: string) { }

    downloadfile() { }

    onProxyTypeSelect(temp: String) { }
}
