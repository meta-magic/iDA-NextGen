import { Component, OnInit } from '@angular/core';

// copied 
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MultipleDeviceListModel, MultipleDeviceListResponse } from 'src/app/modules/push/model/multipleDevicePushTable.model';
import { multipleDevicePushTableService } from 'src/app/modules/push/service/multipleDevicePushTable.service';


@Component({
  selector: 'app-multipleDevicePushTable',
  templateUrl: './multipleDevicePushTable.component.html',
  styleUrls: ['./multipleDevicePushTable.component.scss']
})
export class MultipleDevicePushTableComponent implements OnInit {

  multipleDevice: MultipleDeviceListModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private multipledevicepushtableservice: multipleDevicePushTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.multipleDevice = [];
    this.fetchAllSingleDeviceDetails();

  }

  fetchAllSingleDeviceDetails() {
    this.loader = true;
    let response: any;
    this.multipleDevice = [];
    this.multipledevicepushtableservice.fetchAllMultipleDeviceDetails().subscribe((resp: MultipleDeviceListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.multipleDevice = response.data;

        }
        this.loader = false;
      })

  }

}
