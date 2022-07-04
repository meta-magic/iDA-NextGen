import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PortDeviceListColumnModel, PortDeviceListColumnResponse } from 'src/app/modules/reports/model/portSummaryDeviceListColumn.model';
import { portDeviceListColumnService } from 'src/app/modules/reports/service/portDeviceList.service';


@Component({
  selector: 'app-port-summary-device-details',
  templateUrl: './port-summary-device-details.component.html',
  styleUrls: ['./port-summary-device-details.component.scss']
})
export class PortSummaryDeviceDetailsComponent implements OnInit {

  portDeviceList: PortDeviceListColumnModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }




}
