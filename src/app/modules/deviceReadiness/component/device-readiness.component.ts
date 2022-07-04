import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Table } from '@fullcalendar/daygrid';
import { Table } from 'primeng/table';
import * as c3 from 'c3';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterMatchMode, FilterService, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { SharedService } from '../../common/service/shared.service';
import { CustomerService } from '../../customer/service/customer.service';
import { aType, cGuide, Device, deviceDescriptionBox } from '../model/deviceReadiness.model';
import { DeviceReadinessService } from '../service/device-readiness.service';

@Component({
  selector: 'app-device-readiness',
  templateUrl: './device-readiness.component.html',
  styleUrls: ['./device-readiness.component.scss']
})
export class DeviceReadinessComponent implements OnInit {

  isMasterSel: boolean;
  index: number = 0;
  displayPosition: boolean;
  position:string;

  assesType: aType[];
  selectedValues: any;

  devDesc: deviceDescriptionBox[];

  cGuideItems: cGuide[];
  selectedGuide: any;

  selectedCity: any;

  categoryList: any;
  checkedCategoryList: any;

  customers: any;

  selectedCustomers: any;

  representatives: any;

  statuses: any;

  loading: boolean = true;

  @ViewChild('dt') table: Table;
  matchModeOptions: SelectItem[] = [];


  // constructor() { }

  //Data Table

  uploadedFiles: any[] = [];
  selectedProducts: any[] = [];
  importedDevices: Device[] = [];
  selectedColumns: any;
  columns: any[] = [];
  loder: boolean = false;

  ref: any;
  dialogService: any;




  constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig,
    private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
    private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
    public filterService: FilterService, public redSer: DeviceReadinessService) {

    this.isMasterSel = false;

    this.fetchNetworkDevices();
    this.categoryList = [
      { id: 1, value: 'AAA', isSelected: false },
      { id: 2, value: 'BOYD', isSelected: false },
      { id: 3, value: 'Guest (with Web Auth)', isSelected: false },
      { id: 4, value: 'Guest Originating URL', isSelected: false },
      { id: 5, value: 'MDM', isSelected: false },
      { id: 6, value: 'Posture', isSelected: false },
      { id: 7, value: 'Profiling', isSelected: false }
    ];

    this.getCheckedItemList();

    this.assesType = [
      { name: 'SSH', code: 'Code1' },
      { name: 'SSM', code: 'Code2' }
    ];


    this.cGuideItems = [
      { name: 'ISE_2.6_22_Jul_2019_Doc_v4', code: 'ISE-1' },
      { name: 'ISE_4.6_52_Sept_2018_Doc_v4', code: 'ISE-5' },
      { name: 'ISE_2.8_24_Jul_2021_Doc_v4', code: 'ISE-3' },
      { name: 'ISE_5.6_72_Feb_2022_Doc_v4', code: 'ISE-3' },
      { name: 'ISE_7.6_25_Jul_2020_Doc_v4', code: 'ISE-13' }
    ];

    this.devDesc = [
      { deviceDescTitle: 'Total Imported', deviceDescCount: '4', deviceDescSubText: 'Total Selected 0' },
      { deviceDescTitle: 'Total Non Cisco Switches', deviceDescCount: '0', deviceDescSubText: '.' },
      { deviceDescTitle: 'Total Cisco Switches', deviceDescCount: '4', deviceDescSubText: 'Total Selected 4' },
      { deviceDescTitle: 'Devices Not Assessed', deviceDescCount: '0', deviceDescSubText: '.' },
      { deviceDescTitle: 'Hardware Upgrade Required', deviceDescCount: '25', deviceDescSubText: '1 Devices' },
      { deviceDescTitle: 'Software Upgrade Required', deviceDescCount: '25', deviceDescSubText: '1 Devices' },
      { deviceDescTitle: 'Hardware and Software Ready', deviceDescCount: '75', deviceDescSubText: '3 Devices' },
      { deviceDescTitle: 'Memory Utilization', deviceDescCount: '25', deviceDescSubText: '3 Devices' },

    ];



  }

  ngAfterViewInit() {
    let chart = c3.generate({
      data: {
          columns: [
              ['Memory Utilization', 100],
            ],
          type : 'donut',
          colors: {
            'Memory Utilization': '#32cd32'
        },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: { 
        title: "100%",
        width:25,
        label: {
          format: function(value, ratio, id) {
            return "";
          }
        }
      },
      legend: {
        show: false
      }
  });

}

  ngOnInit(): void {


    // for table
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
      { field: 'status', header: 'Status' },
            
      { field: 'deviceName', header: 'Device Name' },
      { field: 'ipHostName', header: 'IP/HostName' },
      { field: 'deviceType', header: 'Device Type' },
      { field: 'location', header: 'Location' },
      { field: 'producttype', header: 'Product Type' },
      { field: 'hardwareComp', header: 'Hardware Compatibility' },
      { field: 'softComp', header: 'Software Compatibility' },
      { field: 'password', header: 'Current OS' },
      { field: 'enablepassword', header: 'Recommanded OS' },
      { field: 'compguid', header: 'Compatibility Guid' },
    ];
    this.selectedColumns = this.columns;
    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]
    this.primengConfig.ripple = true;
    this.matchModeOptions = [
      { label: "Custom Equals", value: customFilterName },
      { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
      { label: "End With", value: FilterMatchMode.ENDS_WITH },
      { label: "Contains", value: FilterMatchMode.CONTAINS }
    ];
  }

  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  fetchNetworkDevices() {
    this.loder = true;
    let response: any;
    this.importedDevices = [];
    this.redSer.fetchNetworkDevices()
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

  clear(table: Table) {
    table.clear();
  }


  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].isSelected)
        this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        //  this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    // this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }


  onRepresentativeChange(event: any) {
    //   this.table.filter(event.value, 'representative', 'in')
  }

  @Input() get SelectedColumns(): any[] {
    return this.selectedColumns;
  }



  set SelectedColumns(val: any[]) {
    //restore original order
    this.selectedColumns = this.columns.filter(col => val.includes(col));
  }

  deleteProduct(d: any) { }

  onUpdate(device:Device){
    
  }


  openNext(e:any) {
    //e.open();
      this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
      this.index = (this.index === 0) ? 2 : this.index - 1;
  }
  activeIndex=0;
  close= false;
  ganesh(e:any){
    debugger
    this.activeIndex=0;
    this.index =0;
    e.close();
  }  
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
  positionLeft = '400px';
  positionRight = '30px'
  positionTop = '10px';
  marginStyle = { 'margin-left': this.positionLeft, 'margin-top': this.positionTop, 'margin-right': this.positionRight };

}
