import { Component, OnInit } from '@angular/core';

// copied from customer-list Component

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DeviceListModel, DeviceListResponse } from 'src/app/modules/push/model/dTable.model';
import { dTableService } from 'src/app/modules/push/service/dTable.service';

@Component({
  selector: 'app-dTable',
  templateUrl: './dTable.component.html',
  styleUrls: ['./dTable.component.scss']
})
export class DTableComponent implements OnInit {


  loader: boolean = false;
  device: DeviceListModel[] = [];
  displayedColumns: string[] = [];

  constructor(private dtableservice: dTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.device = [];
    this.fetchAllDeviceDetails();

  }

  fetchAllDeviceDetails() {
    this.loader = true;
    let response: any;
    this.device = [];
    this.dtableservice.fetchAllDeviceDetails().subscribe((resp: DeviceListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.device = response.data;

        }
        this.loader = false;
      })

  }

  // addCustomer(){
  //   this.router.navigate(['home/customer/add']);
  // }


  // navigateEditCustomer(entity:any){
  //   this.router.navigate(['home/customer/add']);
  // }

}
