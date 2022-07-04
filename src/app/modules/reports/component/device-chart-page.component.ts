import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NcrdService } from '../service/ncrd.service';
import { ndcrListService } from '../service/ndcrList.service';
// import * as d3 from 'd3';
// import { ChartType } from 'chart.js';
// import {} from 'ng2-charts';

@Component({
  selector: 'app-device-chart-page',
  templateUrl: './device-chart-page.component.html',
  styleUrls: ['./device-chart-page.component.scss']
})
export class DeviceChartPageComponent implements OnInit {

  displayPosition: boolean;
  position:string;

  constructor(private ndcrlistservice: ndcrListService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, 
    private router: Router,  private msgSvc: MessageService, public ncrdservice: NcrdService) { }

  ngOnInit() {
  }
cancel1(){
  this.ncrdservice.reportDetailsShowService.next('hi');
}

showPositionDialog(position: string) {
  this.position = position;
  this.displayPosition = true;
}

// public ganesh1:any[]=['Download Sales','In-store Sales','Mail order sales'];

// public ganeshMulti:DataSet =[
//   [350,450,100],
//   [50,150,120],
//   [250,130,70],
// ]
// public ganeshChartType:ChartType = 'doughnut';




}

