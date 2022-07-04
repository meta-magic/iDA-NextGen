import { Component, OnInit } from '@angular/core';

// copied from dTable Component 

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { configListModel, configListResponse } from 'src/app/modules/push/model/configPushTable.model';
import { configPushTableService } from 'src/app/modules/push/service/configPushTable.service';

@Component({
  selector: 'app-cPushTable',
  templateUrl: './cPushTable.component.html',
  styleUrls: ['./cPushTable.component.scss']
})
export class CPushTableComponent implements OnInit {

  loader: boolean = false;
  configDevice: configListModel[] = [];
  displayedColumns: string[] = [];

  constructor(private configpushtableservice: configPushTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.configDevice = [];
    this.fetchConfigPushDetails();

  }

  fetchConfigPushDetails() {
    this.loader = true;
    let response: any;
    this.configDevice = [];
    this.configpushtableservice.fetchConfigPushDetails().subscribe((resp: configListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.configDevice = response.data;

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
