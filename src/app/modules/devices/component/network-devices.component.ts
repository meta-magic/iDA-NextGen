import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService, SelectItem, FilterMatchMode, MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Tree } from 'primeng/tree';
import { SharedService } from '../../common/service/shared.service';
import { Device } from '../model/device.model';
import { NetworkDeviceService } from '../service/network-device.service';
import { DeviceOperationsComponent } from './device-operations.component';
import { LocationComponent } from './location.component';

@Component({
  selector: 'app-network-devices',
  templateUrl: './network-devices.component.html',
  styleUrls: ['./network-devices.component.scss'],
  styles: [`
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 5rem;
        }

        .layout-news-active :host ::ng-deep .p-datatable tr > th {
            top: 17rem;
        }
        .p-paginator-left-content{
          margin-right: 0px !important;
          display: contents;
        }
        

        @media screen and (max-width: 64em) {
          :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
              top: 0px;
          }
      }
    `]
})
export class NetworkDevicesComponent implements OnInit {
  uploadedFiles: any[] = [];
  selectedProducts: any[] = [];
  importedDevices: Device[] = [];
  selectedColumns: any;
  columns: any[] = [];
  loder: boolean = false;
  matchModeOptions: SelectItem[] = [];


  ref: any;

  addDevice: boolean = false;
  editDevice: boolean = false;
  settingDevice: boolean = false;

  assessmentType: any[] = [];

  constructor(private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
    private netDServ: NetworkDeviceService, private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
    public filterService: FilterService, public dialogService: DialogService) {
    this.fetchNetworkDevices();
    this.fetchassessmentTypeList();

  }

  items: MenuItem[];

  ngOnInit(): void {
    const customFilterName = "custom-equals";
    this.filterService.register(
      customFilterName,
      (value: any, filter: any): boolean => {
        if (filter === undefined || filter === null || filter.trim() === "") {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toString() === filter.toString();
      }
    );

    this.columns = [
      { field: 'deviceName', header: 'Device Name' },
      { field: 'ipHostName', header: 'IP/HostName' },
      { field: 'deviceType', header: 'Device Type' },
      { field: 'deviceProfile', header: 'Device Profile' },
      { field: 'producttype', header: 'Product Type' },
      { field: 'location', header: 'Location' },
      { field: 'userName', header: 'User Name' },
      { field: 'password', header: 'Password' },
      { field: 'enablepassword', header: 'Enable Password' },
      { field: 'owner', header: 'Owner' },
    ];
    this.selectedColumns = this.columns;
    this.fetchNetworkDevices();
    this.matchModeOptions = [
      { label: "Custom Equals", value: customFilterName },
      { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
      { label: "End With", value: FilterMatchMode.ENDS_WITH },
      { label: "Contains", value: FilterMatchMode.CONTAINS }
    ];

    this.items = [
      {
        label: 'Columns',
        items: [{
          //     label: `<div class=col-2 style=height:500px>
          //     <div *ngFor="let node of columns" [value]="node.field">{{'Ganesh'}}
          //     </div>
          // </div>`,
          label: ` <div>
                  <div class="field-checkbox">
                  <input type="checkbox" id="vehicle1" name="ny" value="Bike">
    <label for="ny">New York</label>
</div>
<div class="field-checkbox">
    <p-checkbox name="group1" value="San Francisco"  inputId="sf"></p-checkbox>
    <label for="sf">San Francisco</label>
</div>
<div class="field-checkbox">
    <p-checkbox name="group1" value="Los Angeles"  inputId="la"></p-checkbox>
    <label for="la">Los Angeles</label>
</div>
<div class="field-checkbox">
    <p-checkbox name="group1" value="Chicago"  inputId="ch"></p-checkbox>
    <label for="ch">Chicago</label>
</div>

<div *ngFor="let col of columns" class="field-checkbox">
    <p-checkbox name="group2" value="col" [value]="col"  [inputId]="col.field" [disabled]="col.field === 'R'"></p-checkbox>
    <label [for]="col.field">{{col.header}}</label>
</div>


              </div>`,
          escape: false
        }
        ]
      }
    ];
  }

  fetchNetworkDevices() {
    this.loder = true;
    let response: any;
    this.importedDevices = [];
    this.netDServ.fetchNetworkDevices()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.importedDevices = response.data;
        }
        this.loder = false;
      });
  }
  locations: any[] = [];

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
          this.locations = response.data;
        }
        this.loder = false;
      });
  }

  clear(table: Table) {
    table.clear();
  }

  @Input() get SelectedColumns(): any[] {
    return this.selectedColumns;
  }

  set SelectedColumns(val: any[]) {
    //restore original order
    this.selectedColumns = this.columns.filter(col => val.includes(col));
  }

  openlocation() {
    //   this.ref = this.dialogService.open(LocationComponent, {
    //     header: 'Location',
    //     width: '70%',
    //     contentStyle: {"max-height": "500px", "overflow": "auto"},
    //     baseZIndex: 10000
    // });

    // this.ref.onClose.subscribe((device: any) =>{
    //     if (device) {
    //         this.msgSvc.add({severity:'info', summary: 'Ganesh', detail: 'Ganesh'});
    //     }
    // });

    this.router.navigate(['home/devices/location']);

  }
  onUpload() { }
  openNew() { }
  deleteSelectedProducts() { }
  editProduct(d: any) { }
  deleteProduct(d: any) { }



  adddevice() {
    this.ref = this.dialogService.open(DeviceOperationsComponent, {
      data: {
        id: '51',
        addDevice: true,
        editDevice: false,
        settingDevice: false,
        device: Device,
      },
      header: 'Add Device',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });
  }

  editDeviced() {
    this.ref = this.dialogService.open(DeviceOperationsComponent, {
      data: {
        id: '51gF3',
        addDevice: false,
        editDevice: true,
        settingDevice: false,
        device: Device,
      },
      header: 'Add Device',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });
  }


  settingsDevice() {
    this.ref = this.dialogService.open(DeviceOperationsComponent, {
      data: {
        id: '51gF3',
        addDevice: false,
        editDevice: false,
        settingDevice: true,
        device: Device,
      },
      header: 'Add Device',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });
  }

  openOperations(data: any, componentName: any, styles: any) {
    this.ref = this.dialogService.open(DeviceOperationsComponent, {
      data: {
        id: '51gF3',
        addDevice: false,
        editDevice: true,
        device: Device,
      },
      header: 'Add Device',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });
  }

  ganesh(device: Device) {
    // this.openOperations(device,componentName,styles);
    debugger
    this.ref = this.dialogService.open(DeviceOperationsComponent, {
      data: {
        id: '51gF3',
        addDevice: false,
        editDevice: true,
        device: device,
      },
      header: 'Edit Device',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((device: any) => {
      if (device) {
        this.msgSvc.add({ severity: 'info', summary: 'Ganesh', detail: 'Ganesh' });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }


  fetchassessmentTypeList() {
    this.loder = true;
    let response: any;
    this.assessmentType;
    this.sharedSvc.fetchassessmentTypeList().subscribe((resp) => {
      response = resp;
    }, (error) => { }, () => {
      if (response.success) {
        this.assessmentType = response.data;
      }
    })
  }

  onAssesmentType(abc?: any) { }

  changeItems() {


  }
  myPaginationString =""
  setMyPagination(event?:any){
     //event.first: Index of first record being displayed 
    //event.rows: Number of rows to display in new page 
    //event.page: Index of the new page 
    //event.pageCount: Total number of pages
    let startRow = event.first + 1;
    let endRow =  startRow + event.rows;
    let totalRows = 22;
    this.myPaginationString  = "showing "+startRow +" to "+ endRow +" of "+ totalRows  +" entries"

  }
}
