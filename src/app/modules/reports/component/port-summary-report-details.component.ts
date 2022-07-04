import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as c3 from 'c3';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService } from 'primeng/api';
import { TabPanel, TabView } from 'primeng/tabview';
import { SharedService } from '../../common/service/shared.service';
import { PortSummaryService } from '../service/port-summary.service';

@Component({
  selector: 'app-port-summary-report-details',
  templateUrl: './port-summary-report-details.component.html',
  styleUrls: ['./port-summary-report-details.component.scss']
})
export class PortSummaryReportDetailsComponent implements OnInit {

  
  constructor(private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
   private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
   public filterService: FilterService,public portSummarySer:PortSummaryService,
   private componentFactoryResolver: ComponentFactoryResolver, 
      private viewContainerRef: ViewContainerRef, private chdetectorref:ChangeDetectorRef) { }

  products:any=[]
  position:string;
  displayPosition:boolean;    

  ngOnInit(): void {
    this.products = [1];
  this.otherDetailsShow = false;

  }

  otherDetailsShow:boolean = true;
  show=true;

  otheDshow(){
    this.otherDetailsShow = !this.otherDetailsShow;
  }
  ngAfterViewInit() {
    let chart = c3.generate({
      data: {
          columns: [
              ['Closed ports', 96],
              ['Monitor Ports', 6],
              ['Low Impact Ports', 0],
              ['Unsecured Ports', 1113],

            ],
          type : 'donut',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: "Access Ports 1215",
        label: {
          format: function(value, ratio, id) {
            return value;
          }
        }
      }
  });


}

back(){
  this.portSummarySer.backEmitter.next('Message From Child Component');
}

showDetails(position: string) {
  this.position = position;
  this.displayPosition = true;
}

@ViewChild(TabView) tabView: TabView;

  addTab() {
    let nTabs = this.tabView.tabs.length;
    const tab: TabPanel = new TabPanel(TabView,this.viewContainerRef,this.chdetectorref);
    tab.header = 'Tab' + (nTabs+1);
    tab.closable = true;
    const component: any = PortSummaryReportDetailsComponent;
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.createComponent(factory);
    this.tabView.tabs.push(tab);
  }


  
}
