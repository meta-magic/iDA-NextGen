import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService } from 'primeng/api';
import { SharedService } from '../../common/service/shared.service';
import { manservDeviceListColumnService } from '../service/manservDeviceList.service';

@Component({
  selector: 'app-manage-service-template',
  templateUrl: './manage-service-template.component.html',
  styleUrls: ['./manage-service-template.component.scss']
})
export class ManageServiceTemplateComponent implements OnInit {

  back: any;
  newServTemp: boolean = false;
  screenToDisplay: any;
  isMstDeviceScreen = true;




  constructor(private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
    private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
    public filterService: FilterService, public manservdevicelistcolumnservice: manservDeviceListColumnService) { }



  ngOnInit(): void {

    this.back = this.manservdevicelistcolumnservice.addNewServTemp.subscribe(msg=>{
      this.newServTemp = true;
    });
    this.screenToDisplay = this.manservdevicelistcolumnservice.newServTempEmitter.subscribe(msg=>{
      this.isMstDeviceScreen = false;
    })

    
    this.screenToDisplay = this.manservdevicelistcolumnservice.newServTempEmitter2.subscribe(msg=>{
      this.isMstDeviceScreen = true;
    })
    


  }

  showDetails(){
    this.newServTemp = false;

  }

  mstSelection(){
    this.isMstDeviceScreen=false;
  }

  ngOnDestroy(){
    this.back.unsubscribe();
    this.screenToDisplay.unsubscribe();
  
  }
}
