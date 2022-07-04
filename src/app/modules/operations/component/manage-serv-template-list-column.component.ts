import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ManServDeviceListColumnModel, ManServDeviceListColumnResponse } from 'src/app/modules/operations/model/manageTemplateListColumn.model';
import { manservDeviceListColumnService } from 'src/app/modules/operations/service/manservDeviceList.service';

@Component({
  selector: 'app-manage-serv-template-list-column',
  templateUrl: './manage-serv-template-list-column.component.html',
  styleUrls: ['./manage-serv-template-list-column.component.scss']
})
export class ManageServTemplateListColumnComponent implements OnInit {

  manservDeviceList: ManServDeviceListColumnModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];


        // To Open Device info from Left Column Device List 
        back2: any;
        newServTemp2: boolean = false;
        screenToDisplay2: any;
        isMstDeviceScreen2 = true;


  constructor(private manservdevicelistservice: manservDeviceListColumnService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];

    this.back2 = this.manservdevicelistservice.addNewServTemp2.subscribe(msg=>{
      this.newServTemp2 = true;
    });
    this.screenToDisplay2 = this.manservdevicelistservice.newServTempEmitter2.subscribe(msg=>{
      this.isMstDeviceScreen2 = false;
    })

  }

  showDetails(){
    this.newServTemp2 = false;

  }

  openDeviceInfo(){
    // this.isMstDeviceScreen2=false;
    this.manservdevicelistservice.newServTempEmitter2.next('Hi');

  }

  ngOnDestroy(){
    this.back2.unsubscribe();
    this.screenToDisplay2.unsubscribe();
  
  }

  init() {
    this.loader = true;
    this.manservDeviceList = [];
    this.fetchManServDeviceList();

  }

  mstSelection(){
    this.manservdevicelistservice.newServTempEmitter.next('Hi');
  }

  fetchManServDeviceList() {
    this.loader = true;
    let response: any;
    this.manservDeviceList = [];
    this.manservdevicelistservice.fetchManServDeviceList().subscribe((resp: ManServDeviceListColumnResponse) => { response = resp },
      (error: any) => {
        this.loader = false;
      }, () => {

        if (response.success) {
          this.manservDeviceList = response.data;
        }
        this.loader = false;
      })

    }
}
