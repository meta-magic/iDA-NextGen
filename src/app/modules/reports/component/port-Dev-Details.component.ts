import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PortDevDetailsModel, PortDevDetailsResponse } from 'src/app/modules/reports/model/portDevDetails.model';
import { portDevDetailsService } from 'src/app/modules/reports/service/portDevDetails.service';

@Component({
  selector: 'app-port-Dev-Details',
  templateUrl: './port-Dev-Details.component.html',
  styleUrls: ['./port-Dev-Details.component.scss']
})
export class PortDevDetailsComponent implements OnInit {

  portDevDetails: PortDevDetailsModel[] = [];
  loader: boolean = false;
  displayedColumns: string[] = [];

  constructor(private portdevdetailsservice: portDevDetailsService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loader = true;
    this.portDevDetails = [];
    this.fetchPortDevDetails();

  }

  fetchPortDevDetails() {
    this.loader = true;
    let response: any;
    this.portDevDetails = [];
    this.portdevdetailsservice.fetchPortDevDetails().subscribe((resp: PortDevDetailsResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.portDevDetails = response.data;

        }
        this.loader = false;
      })

  }

}
