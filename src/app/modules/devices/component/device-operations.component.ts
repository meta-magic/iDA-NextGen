import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService,TreeNode } from 'primeng/api';
import {Tree} from 'primeng/tree';
import {TreeModule} from 'primeng/tree';
import {TreeSelectModule} from 'primeng/treeselect'; 
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SharedService } from '../../common/service/shared.service';
import { Device } from '../model/device.model';
import { NetworkDeviceService } from '../service/network-device.service';

@Component({
  selector: 'app-device-operations',
  templateUrl: './device-operations.component.html',
  styleUrls: ['./device-operations.component.scss']
})
export class DeviceOperationsComponent implements OnInit {

  constructor(private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
    private netDServ: NetworkDeviceService, private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
     public filterService: FilterService,public dialogService: DialogService,public config:DynamicDialogConfig) {
      this.fetchLocation(); 
      this.selectedFile=this.locations[0];
      }

  loder = false;
  locations:TreeNode[]=[];
  deviceName:string="";
  device:Device;
  btntype:string ="";
  settingsD:boolean = false;
  selectedFile: TreeNode;
  nodes1: any[];
  selectedNode: any;
  ngOnInit(): void {
    this.device=this.config.data.device;
    this.device.deviceName=this.config.data.device.deviceName;
    if(this.device.deviceName!=undefined){
      this.btntype ="Update";
    }else{
      this.btntype ="Save";
    }

    this.modelSelection = this.config.data.settingDevice
    if(this.modelSelection){
      this.modelCheck = "settingConfig";
    }

    this.fetchLocation();
    this.fetchLocation1();
  }
  modelSelection=false;
  modelCheck="";
  fetchLocation() {
    this.loder = true;
    let response: any;
    this.locations = [];
    this.netDServ.fetchLocation()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.locations = [{
            label: 'All Location',
            children: response.data
        }];
        }
        this.loder = false;
      });
  }

//  this.nodeService.getFiles().then(files => this.nodes1 = files);
  fetchLocation1() {
    this.loder = true;
    let response: any;
    this.nodes1 = [];
    this.netDServ.fetchLocation1()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
        //   this.locations = [{
        //     label: 'All Location',
        //     children: response.data
        // }];
        this.nodes1 = response.data;
        }
        this.loder = false;
      });
  }
  reset(){}
  save(){}
}
