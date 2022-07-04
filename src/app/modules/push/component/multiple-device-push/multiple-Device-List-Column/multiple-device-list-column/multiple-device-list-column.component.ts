import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MultipleDeviceListColumnModel, MultipleDeviceListColumnResponse } from 'src/app/modules/push/model/multipleDeviceListColumn.model';
import { multipleDeviceListColumnService } from 'src/app/modules/push/service/multipleDeviceList.service';

@Component({
  selector: 'app-multiple-device-list-column',
  templateUrl: './multiple-device-list-column.component.html',
  styleUrls: ['./multiple-device-list-column.component.scss']
})
export class MultipleDeviceListColumnComponent implements OnInit {

  multipleDeviceList: MultipleDeviceListColumnModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private multipledevicelistservice: multipleDeviceListColumnService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.multipleDeviceList = [];
    this.fetchDeviceList();

  }

  fetchDeviceList() {
    this.loader = true;
    let response: any;
    this.multipleDeviceList = [];
    this.multipledevicelistservice.fetchDeviceList().subscribe((resp: MultipleDeviceListColumnResponse) => { response = resp },
      (error: any) => {
        this.loader = false;
      }, () => {

        if (response.success) {
          this.multipleDeviceList = response.data;
        }
        this.loader = false;
      })

  }

}
