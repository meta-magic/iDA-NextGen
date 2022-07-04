import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PortDeviceListColumnModel, PortDeviceListColumnResponse } from 'src/app/modules/reports/model/portSummaryDeviceListColumn.model';
import { portDeviceListColumnService } from 'src/app/modules/reports/service/portDeviceList.service';

@Component({
  selector: 'app-port-device-list-column',
  templateUrl: './port-device-list-column.component.html',
  styleUrls: ['./port-device-list-column.component.scss']
})
export class PortDeviceListColumnComponent implements OnInit {
  portDeviceList: PortDeviceListColumnModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private portdevicelistservice: portDeviceListColumnService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.portDeviceList = [];
    this.fetchPortDeviceList();

  }

  fetchPortDeviceList() {
    this.loader = true;
    let response: any;
    this.portDeviceList = [];
    this.portdevicelistservice.fetchDeviceList().subscribe((resp: PortDeviceListColumnResponse) => { response = resp },
      (error: any) => {
        this.loader = false;
      }, () => {

        if (response.success) {
          this.portDeviceList = response.data;
        }
        this.loader = false;
      })

    }

}
