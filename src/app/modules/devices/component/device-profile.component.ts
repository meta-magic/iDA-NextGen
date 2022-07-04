import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { dpListModel, dpListResponse } from '../model/dpList.model';
import { dpListService } from '../service/dpList.service';
import { NetworkDeviceService } from '../service/network-device.service';
import { NewProfileInstructionsComponent } from './new-profile-instructions.component';

@Component({
  selector: 'app-device-profile',
  templateUrl: './device-profile.component.html',
  styleUrls: ['./device-profile.component.scss']
})
export class DeviceProfileComponent implements OnInit {

  back: any;
  newDevProfile: boolean = false;
  screenToDisplay: any;
  isNewDeviceProfileScreen = true;

  back2: any;
  newDevProfile2: boolean = false;
  screenToDisplay2: any;
  isNewDeviceProfileScreen2 = false;

  ref: any;
  loader: boolean = false;
  dpDevicelist: dpListModel[] = [];
  displayedColumns: string[] = [];

  constructor(private dplistservice: dpListService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, private router: Router, public dialogService: DialogService, private msgSvc: MessageService, public networkdeviceservice: NetworkDeviceService) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];


    this.back = this.networkdeviceservice.addNewDevProfile.subscribe(msg => {
      this.newDevProfile = true;
    });
    this.screenToDisplay = this.networkdeviceservice.newDevProfileEmitter.subscribe(msg => {
      this.isNewDeviceProfileScreen = false;
    })

    this.back2 = this.networkdeviceservice.addNewDevProfile2.subscribe(msg => {
      this.newDevProfile2 = true;
    });
    this.screenToDisplay2 = this.networkdeviceservice.newDevProfileEmitter2.subscribe(msg => {
      this.isNewDeviceProfileScreen2 = true;
      this.isNewDeviceProfileScreen = true;
    })

  }


  showDetails() {
    this.newDevProfile = false;
    this.newDevProfile2 = false;
  }

  openNewProfile() {
    this.isNewDeviceProfileScreen = false;

  }

  openNdp() {
    // this.isNewDeviceProfileScreen2 = false;
    this.networkdeviceservice.newDevProfileEmitter2.next('hi');

  }

  ngOnDestroy() {
    this.back.unsubscribe();
    this.screenToDisplay.unsubscribe();

    this.back2.unsubscribe();
    this.screenToDisplay2.unsubscribe();

  }

  init() {
    this.loader = true;
    this.dpDevicelist = [];
    this.fetchAllDeviceDetails();

  }

  fetchAllDeviceDetails() {
    this.loader = true;
    let response: any;
    this.dpDevicelist = [];
    this.dplistservice.fetchDpListDetails().subscribe((resp: dpListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.dpDevicelist = response.data;

        }
        this.loader = false;
      })

  }

  openInstructions() {
    this.ref = this.dialogService.open(NewProfileInstructionsComponent, {
      header: 'Instructions',
      width: '70%',
      contentStyle: { "max-height": "70vh", "overflow": "auto" },
      // baseZIndex: 10000
    });

    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });

  }

}
