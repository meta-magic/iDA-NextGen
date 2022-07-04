import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NcrdService } from '../service/ncrd.service';
import { ndcrListService } from '../service/ndcrList.service';

@Component({
  selector: 'app-new-compliance-report-definition',
  templateUrl: './new-compliance-report-definition.component.html',
  styleUrls: ['./new-compliance-report-definition.component.scss']
})
export class NewComplianceReportDefinitionComponent implements OnInit {

  constructor(private ndcrlistservice: ndcrListService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, 
    private router: Router,  private msgSvc: MessageService, public ncrdservice: NcrdService) { }

  ngOnInit() {
  }
  cancel1(){
    this.ncrdservice.newDevProfileEmitter11.next('hi');

  }
}
