import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { dchartTableModel, dchartTableResponse } from 'src/app/modules/reports/model/dchartTable.model';
import { dchartTableService } from 'src/app/modules/reports/service/dchartTable.service';

@Component({
  selector: 'app-dChartTable',
  templateUrl: './dChartTable.component.html',
  styleUrls: ['./dChartTable.component.scss']
})
export class DChartTableComponent implements OnInit {

  loader: boolean = false;
  dchartData: dchartTableModel[] = [];

  constructor(private dchartdableservice: dchartTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

    ngOnInit(): void {
      this.init();
    }


    init() {
      this.loader = true;
      this.dchartData = [];
      this.fetchDchartTableDetails();
    }
  
    fetchDchartTableDetails() {
      this.loader = true;
      let response: any;
      this.dchartData = [];
      this.dchartdableservice.fetchDchartTableDetails().subscribe((resp: dchartTableResponse) => { response = resp },
        (error: any) => {
          this.loader = false;
  
        }, () => {
  
          if (response.success) {
            this.dchartData = response.data;
  
          }
          this.loader = false;
        })
  
    }

}
