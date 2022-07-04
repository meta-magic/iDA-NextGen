import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ndcrTableModel, ndcrTableResponse } from 'src/app/modules/reports/model/ndcrTable.model';
import { ndcrTableService } from 'src/app/modules/reports/service/ndcrTable.service';
import { NcrdService } from '../service/ncrd.service';

@Component({
  selector: 'app-ndcrTable',
  templateUrl: './ndcrTable.component.html',
  styleUrls: ['./ndcrTable.component.scss']
})
export class NdcrTableComponent implements OnInit {

  loader: boolean = false;
  ndcrData: ndcrTableModel[] = [];

  constructor(private ndcrtableservice: ndcrTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router,public ncrdservice: NcrdService) { }

    ngOnInit(): void {
      this.init();
    }


    init() {
      this.loader = true;
      this.ndcrData = [];
      this.fetchNdcrTableDetails();
    }
  
    fetchNdcrTableDetails() {
      this.loader = true;
      let response: any;
      this.ndcrData = [];
      this.ndcrtableservice.fetchNdcrTableDetails().subscribe((resp: ndcrTableResponse) => { response = resp },
        (error: any) => {
          this.loader = false;
  
        }, () => {
  
          if (response.success) {
            this.ndcrData = response.data;
  
          }
          this.loader = false;
        })
  
    }

    ganesh(){
      this.ncrdservice.rrShow.next("hi");
    }
}
