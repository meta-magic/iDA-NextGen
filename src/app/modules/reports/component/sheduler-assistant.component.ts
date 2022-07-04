import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { schedulerModel, schedulerResponse } from 'src/app/modules/reports/model/schedulerAssistent.model';
import { schedulerService } from 'src/app/modules/reports/service/scheduler.service';

@Component({
  selector: 'app-sheduler-assistant',
  templateUrl: './sheduler-assistant.component.html',
  styleUrls: ['./sheduler-assistant.component.scss']
})
export class ShedulerAssistantComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  loader: boolean = false;
  scheduler: schedulerModel[] = [];
  displayedColumns: string[] = [];
  

  constructor(private schedulerservice: schedulerService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.scheduler = [];
    this.fetchAllDeviceDetails();

  }

  fetchAllDeviceDetails() {
    this.loader = true;
    let response: any;
    this.scheduler = [];
    this.schedulerservice.fetchValidateDetails().subscribe((resp: schedulerResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.scheduler = response.data;

        }
        this.loader = false;
      })

  }

}
