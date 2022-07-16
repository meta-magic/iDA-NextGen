import { Component, OnInit } from '@angular/core';

// copied 
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedService } from 'src/app/modules/common/service/shared.service';
import { SingleDeviceListColumnModel, SingleDeviceListColumnResponse } from 'src/app/modules/push/model/singleDeviceListColumn.model';
import { singleDeviceListColumnService } from 'src/app/modules/push/service/singleDeviceList.service';

@Component({
  selector: 'app-single-device-list-column',
  templateUrl: './single-device-list-column.component.html',
  styleUrls: ['./single-device-list-column.component.scss']
})
export class SingleDeviceListColumnComponent implements OnInit {

  singleDeviceList: SingleDeviceListColumnModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private singledevicelistservice: singleDeviceListColumnService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, private router: Router, private sharedSvc: SharedService) { }

  // ngOnInit() {
  // }


  displayPosition: boolean;

  position: string;

  ngOnInit(): void {
    this.init();
    this.fetechDeviceType();
    this.fetechOsVersionList();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.singleDeviceList = [];
    this.fetchDeviceList();
  }

  fetchDeviceList() {
    this.loader = true;
    let response: any;
    this.singleDeviceList = [];
    this.singledevicelistservice.fetchDeviceList().subscribe((resp: SingleDeviceListColumnResponse) => { response = resp },
      (error: any) => {
        this.loader = false;
      }, () => {

        if (response.success) {
          this.singleDeviceList = response.data;
        }
        this.loader = false;
      })

  }

  singleDeviceSearch() {
    this.showPositionDialog('top')
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  onDeviceSelect(ss: any) {

  }

  loder: boolean = false;
  deviceType: any;
  osVersions: any;

  fetechDeviceType() {
    this.loder = true;
    let response: any;
    this.deviceType = [];

    this.sharedSvc.fetechDeviceType()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch countries, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.deviceType = response.data;
        }
        this.loder = false;
        // if (this.country[0].primaryId && this.country[0].primaryId > 0) {
        //     this.onCountrySelect(this.country[0].primaryId);
        // }
      });
  }

  fetechOsVersionList() {
    this.loder = true;
    let response: any;
    this.osVersions = [];

    this.sharedSvc.fetechOsVersionList()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch countries, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.osVersions = response.data;
        }
        this.loder = false;
        // if (this.country[0].primaryId && this.country[0].primaryId > 0) {
        //     this.onCountrySelect(this.country[0].primaryId);
        // }
      });
  }

  closeSearch() {
    this.displayPosition = false;
  }

  searchSingleDevice() {

  }

}
