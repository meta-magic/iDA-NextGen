import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { TemplateTypeService } from '../../../service/templateType.service';

interface Device {
  devName: string;
  devMode: string;
  devStatus: string;
  dvVlan: string;
  devDesc: any;
  endptsVlan: any;
  cdpPlatform: any;
  lldpSysDesc: any;
  codingStatus: string;
  servTemplate: string;
}

interface City {
  devName: string,
  devCode: string
}

@Component({
  selector: 'app-multiple-device-push',
  templateUrl: './multiple-device-push.component.html',
  styleUrls: ['./multiple-device-push.component.scss']
})
export class MultipleDevicePushComponent implements OnInit {

  configDesc: Device[];
  selectedDevice : any;

  selectedValue: string = 'checkbox';

  deviceNames: City[];
  selDevice: any;

  items: MenuItem[] = [];

  selectedValues: string[] = ['val1','val2'];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.configDesc = [
      { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      { devName: "GigabitEthernet02", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
    ];
    this.deviceNames = [
      {devName: 'GigabitEthernet01', devCode: 'GE01'},
      {devName: 'GigabitEthernet02', devCode: 'GE02'},
      {devName: 'GigabitEthernet03', devCode: 'GE03'},
      {devName: 'GigabitEthernet04', devCode: 'GE04'},
      {devName: 'GigabitEthernet05', devCode: 'GE05'}
  ];
  this.items = [
    {label: 'Manage Configauration', icon: 'pi pi-cog'},
    {label: 'Edit Configauration', icon: 'pi pi-pencil'},
    {separator: true},
    {label: 'Configauration Push History', icon: 'pi pi-history', routerLink: ['/setup']}
];

   }



  ngOnInit(): void {

  }

  config(severity: string) {
    this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}

}
