import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService } from 'primeng/api';
import { SharedService } from '../../common/service/shared.service';
import { PortSummaryService } from '../service/port-summary.service';



import { portModel, portResponse } from 'src/app/modules/reports/model/newPortSummaryReport.model';
import { portService } from 'src/app/modules/reports/service/newPortSummaryReport.service';

@Component({
  selector: 'app-port-summary-generate-report',
  templateUrl: './port-summary-generate-report.component.html',
  styleUrls: ['./port-summary-generate-report.component.scss']
})
export class PortSummaryGenerateReportComponent implements OnInit {

  loader: boolean = false;
  port: portModel[] = [];
  displayedColumns: string[] = [];

  constructor(private portservice: portService, private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
   private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
   public filterService: FilterService,public portSummarySer:PortSummaryService) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.port = [];
    this.fetchPortDetails();

  }

  fetchPortDetails() {
    this.loader = true;
    let response: any;
    this.port = [];
    this.portservice.fetchPortDetails().subscribe((resp: portResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.port = response.data;

        }
        this.loader = false;
      })

  }

  cancel(){
    this.portSummarySer.generateReportEmitter.next("Ganesh");
  }

}
