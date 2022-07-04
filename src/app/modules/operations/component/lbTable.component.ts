import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { lbTableModel, lbTableResponse } from 'src/app/modules/operations/model/lbTable.model';
import { lbTableService } from 'src/app/modules/operations/service/lbTable.service';


@Component({
  selector: 'app-lbTable',
  templateUrl: './lbTable.component.html',
  styleUrls: ['./lbTable.component.scss']
})
export class LbTableComponent implements OnInit {

  loader: boolean = false;
  lbData: lbTableModel[] = [];

  constructor(private lbtableservice: lbTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loader = true;
    this.lbData = [];
    this.fetchLBTableDetails();
  }

  fetchLBTableDetails() {
    this.loader = true;
    let response: any;
    this.lbData = [];
    this.lbtableservice.fetchLBTableDetails().subscribe((resp: lbTableResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.lbData = response.data;

        }
        this.loader = false;
      })

  }

}
