import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig, SelectItemGroup } from "primeng/api";
import { TemplateTypeService } from '../../../service/templateType.service';
import { SharedService } from 'src/app/modules/common/service/shared.service';


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
  selectedDevice: any;

  selectedValue: string = 'checkbox';

  deviceNames: City[];
  selDevice: any;

  items: MenuItem[] = [];

  selectedValues: string[] = ['val1', 'val2'];

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private sharedSvc: SharedService) {
    this.configDesc = [
      { devName: "GigabitEthernet01", devMode: "Routed", devStatus: "Connected", dvVlan: "Abc12", devDesc: "Abc123", endptsVlan: "Abc123", cdpPlatform: "Abc123", lldpSysDesc: "Abc123", codingStatus: "Initial", servTemplate: "Test" },
      { devName: "GigabitEthernet02", devMode: "Routed", devStatus: "Connected", dvVlan: "Abc12", devDesc: "Abc123", endptsVlan: "Abc123", cdpPlatform: "Abc123", lldpSysDesc: "Abc123", codingStatus: "Initial", servTemplate: "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
      // { devName: "GigabitEthernet01", devMode: "Routed", devStatus : "Connected", dvVlan : "Abc12", devDesc : "Abc123", endptsVlan : "Abc123", cdpPlatform : "Abc123", lldpSysDesc : "Abc123", codingStatus : "Initial", servTemplate : "Test" },
    ];
    this.deviceNames = [
      { devName: 'GigabitEthernet01', devCode: 'GE01' },
      { devName: 'GigabitEthernet02', devCode: 'GE02' },
      { devName: 'GigabitEthernet03', devCode: 'GE03' },
      { devName: 'GigabitEthernet04', devCode: 'GE04' },
      { devName: 'GigabitEthernet05', devCode: 'GE05' }
    ];
    this.items = [
      { label: 'Manage Configauration', icon: 'pi pi-cog' },
      { label: 'Edit Configauration', icon: 'pi pi-pencil' },
      { separator: true },
      { label: 'Configauration Push History', icon: 'pi pi-history', routerLink: ['/setup'] }
    ];

  }



  ngOnInit(): void {

  }

  config(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }


  // Multiple Device Search In Table
  displayPositionMultiple: boolean;
  positionMultiple: string;

  searchDeviceForMultipleDevice() {
    this.showPositionDialogForMultiple('top')
  }
  showPositionDialogForMultiple(position: string) {
    this.positionMultiple = position;
    this.displayPositionMultiple = true;
  }
  closeSearchMultiple() {
    this.displayPositionMultiple = false;
  }

  // Multiple Device Search IN List Column
  displayPositionInList: boolean;
  positionInList: string;

  searchDeviceForMultipleList() {
    this.showPositionDialogForMultipleList('top')
  }
  showPositionDialogForMultipleList(position: string) {
    this.positionInList = position;
    this.displayPositionInList = true;
  }
  closeSearchInMultipleList() {
    this.displayPositionInList = false;
  }

  // Fetching from Service for Multiple Device List Search Column 
  loder: boolean = false;
  deviceType: any;
  osVersions: any;

  fetechDeviceType() {
    this.loder = true;
    let response: any;
    this.deviceType = [];

    this.sharedSvc.fetechDeviceType()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch countries, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.deviceType = response.data;
        }
        this.loder = false;
        // if (this.country[0].primaryId && this.country[0].primaryId > 0) {
        //     this.onCountrySelect(this.country[0].primaryId);
        // }
      });
  }

}
