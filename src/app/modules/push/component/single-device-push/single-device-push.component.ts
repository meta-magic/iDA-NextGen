import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig, SelectItemGroup } from "primeng/api";
import {Device} from 'src/app/modules/push/model/device.model';

@Component({
  selector: 'app-single-device-push',
  templateUrl: './single-device-push.component.html',
  styleUrls: ['./single-device-push.component.scss']
})
export class SingleDevicePushComponent implements OnInit {
  configDesc: Device[];
  selectedDevice : any;

  items: MenuItem[] = [];

  selectedValues: string[] = [];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.configDesc = [
      { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      { devName: "GigabitEthernet02", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
    ];
 
   }

   

  ngOnInit(): void {
    this.items = [
      {label: 'Manage Configauration', icon: 'pi pi-cog'},
      {label: 'Edit Configauration', icon: 'pi pi-pencil'},
      {separator: true},
      {label: 'Configauration Push History', icon: 'pi pi-history', routerLink: ['/setup']}
  ];
  }

  config(severity: string) {
    this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}


}

export class ModelComponent {

  selectedValues: string[] = ['val1','val2'];

}
