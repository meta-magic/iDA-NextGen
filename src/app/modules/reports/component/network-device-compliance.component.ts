import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { NdComplianceReportDeviceListColumnResponse, NdComplianceReportDeviceListColumnModel } from '../model/ndComplanceReportListColumn.model';
import { NcrdService } from '../service/ncrd.service';
import { ndcrListService } from '../service/ndcrList.service';

@Component({
  selector: 'app-network-device-compliance',
  templateUrl: './network-device-compliance.component.html',
  styleUrls: ['./network-device-compliance.component.scss']
})
export class NetworkDeviceComplianceComponent implements OnInit {

  back: any;
  newDevProfile: boolean = false;
  screenToDisplay: any;
  isNewDeviceProfileScreen = false;

  isDefault = true;

  screenToDisplay1:any;
  screenToDisplay123:any;
  screenToDisplay1234:any;

  reportDetails:boolean = false ;

  constructor(private ndcrlistservice: ndcrListService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, 
    private router: Router,  private msgSvc: MessageService, public ncrdservice: NcrdService) { }


    loader: boolean = false;
    ndcrDevicelist: NdComplianceReportDeviceListColumnModel[] = [];

  ngOnInit(): void {
    this.init();

    this.back = this.ncrdservice.addNewDevProfile.subscribe(msg => {
      this.newDevProfile = true;
    });

    this.screenToDisplay = this.ncrdservice.newDevProfileEmitter.subscribe(msg => {
      this.isNewDeviceProfileScreen = true;
            this.isDefault = false;
            this.reportDetails =false;


    })
    this.screenToDisplay1 = this.ncrdservice.newDevProfileEmitter11.subscribe(msg => {
    
      this.isDefault = true;
      this.isNewDeviceProfileScreen = false;
      this.reportDetails =false;


    })

    this.screenToDisplay123 = this.ncrdservice.reportDetailsShowService.subscribe(msg => {
    
      this.isDefault = true;
      this.isNewDeviceProfileScreen = false;
      this.reportDetails =false;

    })


    this.screenToDisplay1234 = this.ncrdservice.rrShow.subscribe(msg => {
    
      this.isDefault = false;
      this.isNewDeviceProfileScreen = false;
      this.reportDetails =true;

    })


  }

  showDetails() {
    this.newDevProfile = false;
  }

  openNewProfile() {
    this.isNewDeviceProfileScreen = false;
  }

  openNdcr() {
    // this.isNewDeviceProfileScreen2 = false;
    this.ncrdservice.newDevProfileEmitter.next('hi');

  }

  ngOnDestroy() {
    this.back.unsubscribe();
    this.screenToDisplay.unsubscribe();
    this.screenToDisplay1.unsubscribe();
    this.screenToDisplay123.unsubscribe();
    this.screenToDisplay1234.unsubscribe();
  }

  init() {
    this.loader = true;
    this.ndcrDevicelist = [];
    this.fetchNdcrListDetails();
  }

  fetchNdcrListDetails() {
    this.loader = true;
    let response: any;
    this.ndcrDevicelist = [];
    this.ndcrlistservice.fetchNdcrListDetails().subscribe((resp: NdComplianceReportDeviceListColumnResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.ndcrDevicelist = response.data;

        }
        this.loader = false;
      })

  }

  openReportD(){
    //this.ncrdservice.reportDetailsShowService.next('hi');
    this.isDefault = false;
    this.isNewDeviceProfileScreen = false;
    this.reportDetails =true;
  }
}
