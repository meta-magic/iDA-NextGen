import { Component, OnInit } from '@angular/core';

// copied from dTable 

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SingleDeviceListModel, SingleDeviceListResponse } from 'src/app/modules/push/model/singleDevicePushTable.model';
import { singleDevicePushTableService } from 'src/app/modules/push/service/singleDevicePushTable.service';

@Component({
  selector: 'app-singleDevicePushTable',
  templateUrl: './singleDevicePushTable.component.html',
  styleUrls: ['./singleDevicePushTable.component.scss']
})
export class SingleDevicePushTableComponent implements OnInit {

  singleDevice: SingleDeviceListModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private singledevicepushtableservice: singleDevicePushTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.singleDevice = [];
    this.fetchAllSingleDeviceDetails();

  }

  fetchAllSingleDeviceDetails() {
    this.loader = true;
    let response: any;
    this.singleDevice = [];
    this.singledevicepushtableservice.fetchAllSingleDeviceDetails().subscribe((resp: SingleDeviceListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.singleDevice = response.data;

        }
        this.loader = false;
      })

  }

}
