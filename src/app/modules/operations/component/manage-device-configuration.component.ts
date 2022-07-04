import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Device, deviceConfig } from '../model/operations.model';

@Component({
  selector: 'app-manage-device-configuration',
  templateUrl: './manage-device-configuration.component.html',
  styleUrls: ['./manage-device-configuration.component.scss']
})
export class ManageDeviceConfigurationComponent implements OnInit {

  configDesc: Device[]=[];
  configPush: deviceConfig[]=[];

  selectedDevice : any;

  items: MenuItem[] = [];

  selectedValues: string[] = [];
  deviceConfig: ({ dName: string; dSpec: string; osVersion: string; pName: string; pType: string; owner: string; location: string; globalId: number; noOfInterfaces: number; } | { dName: string; dSpec: string; osVersion: string; pName: string; pType: string; owner: string; location: string; globalId: string; noOfInterfaces: number; })[];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) { 

    this.configDesc = [
      { devID: "14(10.254.4.14)", prodID: "Catalyst 3750-X (WS-C3750X-24P-E)", location : "All Locations", pName : "Cisco", osType : "IOS", osVersion : "15.2(4)E5", cStatus : "Assigned", tName : "asg (G)", selInterface : "0/25", intAssign : "0/25", lastRefresh : "05 Dec 2021 , 03:46:18 AM CST", refreshLogs: '' },
      { devID: "26(10.254.4.26)", prodID: "Catalyst 2960-X (WS-C3750X-24PD-L)", location : "All Locations", pName : "Cisco", osType : "IOS", osVersion : "15.2(4)E4", cStatus : "Assigned", tName : "tests (G)", selInterface : "24", intAssign : "24", lastRefresh : "02 Sept 2021 , 12:46:18 AM CST", refreshLogs: '' }
    ];

    this.deviceConfig = [
      { dName: "Device_6 (10.254.4.6)", dSpec: "Wired WS", osVersion: "15.2(2)E9", pName : "Cisco", pType : "Catalyst 3500-C", owner : "admin", location : "All Locations", globalId : 1, noOfInterfaces: 9},
      { dName: "26 (10.254.4.26)", dSpec: "Catalyst 2960-X (WS-C3750X-24PD-L)", osVersion: "15.2(2)E6", pName : "Cisco", pType : "Catalyst 2960-C", owner : "admin", location : "All Locations",  globalId : "..", noOfInterfaces : 8}

    ];

  }

  ngOnInit (): void {
  }
}
