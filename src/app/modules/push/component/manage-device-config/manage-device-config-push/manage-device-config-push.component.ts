import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
// import { Device, deviceConfig } from '../../../model/device.model';
import { City } from '../../../model/templateType.model';
import { TemplateTypeService } from 'src/app/modules/push/service/templateType.service';




@Component({
  selector: 'app-manage-device-config-push',
  templateUrl: './manage-device-config-push.component.html',
  styleUrls: ['./manage-device-config-push.component.scss']
})


export class ManageDeviceConfigPushComponent implements OnInit {

  // configDesc: Device[]=[];
  // configPush: deviceConfig[]=[];

  selectedDevice : any;

  items: MenuItem[] = [];

  selectedValues: string[] = [];


  // for tempate type dropdown 
  cities: City[] = [];

  selectedCityCode: string = '';



  // deviceConfig: ({ dName: string; dSpec: string; osVersion: string; pName: string; pType: string; owner: string; location: string; globalId: number; noOfInterfaces: number; } | { dName: string; dSpec: string; osVersion: string; pName: string; pType: string; owner: string; location: string; globalId: string; noOfInterfaces: number; })[];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private templateService: TemplateTypeService) { 

    // this.configDesc = [
    //   { devID: "14(10.254.4.14)", prodID: "Catalyst 3750-X (WS-C3750X-24P-E)", location : "All Locations", pName : "Cisco", osType : "IOS", osVersion : "15.2(4)E5", cStatus : "Assigned", tName : "asg (G)", selInterface : "0/25", intAssign : "0/25", lastRefresh : "05 Dec 2021 , 03:46:18 AM CST", refreshLogs: '' },
    //   { devID: "26(10.254.4.26)", prodID: "Catalyst 2960-X (WS-C3750X-24PD-L)", location : "All Locations", pName : "Cisco", osType : "IOS", osVersion : "15.2(4)E4", cStatus : "Assigned", tName : "tests (G)", selInterface : "24", intAssign : "24", lastRefresh : "02 Sept 2021 , 12:46:18 AM CST", refreshLogs: '' }
    // ];

    // this.deviceConfig = [
    //   { dName: "Device_6 (10.254.4.6)", dSpec: "Wired WS", osVersion: "15.2(2)E9", pName : "Cisco", pType : "Catalyst 3500-C", owner : "admin", location : "All Locations", globalId : 1, noOfInterfaces: 9},
    //   { dName: "26 (10.254.4.26)", dSpec: "Catalyst 2960-X (WS-C3750X-24PD-L)", osVersion: "15.2(2)E6", pName : "Cisco", pType : "Catalyst 2960-C", owner : "admin", location : "All Locations",  globalId : "..", noOfInterfaces : 8}

    // ];

    this.fetchTemplateType();

  }

  loder = false;
  templateType:City[] = [];
  selectedTemplateType:City = new City();

  fetchTemplateType(){
   this.loder = true;
   let response: any;
   this.templateType = [];

   this.templateService.fetchTemplateType()
       .subscribe((resp: any) => {
           response = resp;
       }, (error: any) => {
           this.loder = false;
           this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch countries, if problem persist please connect with admin!' });
       }, () => {
           if (response.success) {
               this.templateType = response.data;
           }
           this.loder = false;
         
       });
  }

  ngOnInit (): void {
  }

  // To Search Devices in Assign Template

  displayPosition: boolean;
  position: string;

  searchDeviceForAssignTemp(){
    this.showPositionDialog('top')
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
closeSearch(){
  this.displayPosition = false;
}
//  Config Push Device Search 
displayPositionCPush: boolean;
positionCPush: string;

cPushDeviceSearch(){
  this.showPositionDialogForCPush('top')
}
showPositionDialogForCPush(position: string) {
  this.positionCPush = position;
  this.displayPositionCPush = true;
}
closeSearchCPush(){
  this.displayPositionCPush = false;
}


//  Validate Device Search 
displayPositionValidate: boolean;
positionValidate: string;

validateDeviceSearch(){
  this.showPositionDialogForValidate('top')
}
showPositionDialogForValidate(position: string) {
  this.positionValidate = position;
  this.displayPositionValidate = true;
}
closeSearchValidate(){
  this.displayPositionValidate = false;
}

//  Commit Device Search 
displayPositionCommit: boolean;
positionCommit: string;

commitDeviceSearch(){
  this.showPositionDialogForCommit('top')
}
showPositionDialogForCommit(position: string) {
  this.positionCommit = position;
  this.displayPositionCommit = true;
}
closeSearchCommit(){
  this.displayPositionCommit = false;
}

}

export class ModelComponent {

  // selectedValues: string[] = ['val1','val2'];

}
