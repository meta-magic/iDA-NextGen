import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { psnTableModel, psnTableResponse } from 'src/app/modules/operations/model/psnTable.model';
import { psnTableService } from 'src/app/modules/operations/service/psnTable.service';

@Component({
  selector: 'app-psnTable',
  templateUrl: './psnTable.component.html',
  styleUrls: ['./psnTable.component.scss']
})
export class PsnTableComponent implements OnInit {

  loader: boolean = false;
  psnData: psnTableModel[] = [];

  constructor(private psntableservice: psnTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

    ngOnInit() {
      this.init();
    }
  
    init() {
      this.loader = true;
      this.psnData = [];
      this.fetchLBTableDetails();
    }
  
    fetchLBTableDetails() {
      this.loader = true;
      let response: any;
      this.psnData = [];
      this.psntableservice.fetchPSNTableDetails().subscribe((resp: psnTableResponse) => { response = resp },
        (error: any) => {
          this.loader = false;
  
        }, () => {
  
          if (response.success) {
            this.psnData = response.data;
  
          }
          this.loader = false;
        })
  
    }

}
