import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, FilterService, MessageService, TreeNode } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedService } from '../../common/service/shared.service';
import { NetworkDeviceService } from '../service/network-device.service';
// import * as cloneDeep from 'lodash/fp/cloneDeep';
import cloneDeep from 'lodash/fp/cloneDeep.js';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private msgSvc: MessageService, private cookieService: CookieService,
    private router: Router, private activatedroute: ActivatedRoute,
    private netDServ: NetworkDeviceService, private sharedSvc: SharedService, public confirmSvc: ConfirmationService,
    public filterService: FilterService, public dialogService: DialogService) {
    this.selectedFile = this.locations[0];
  }

  loder = false;
  locations: TreeNode[] = [];


  selectedFile: TreeNode;
  expandAllClicked = false;
  collapseAllClicked = true;

  ngOnInit(): void {
    this.fetchLocation();
    this.getFilesystem();
    this.expandAllClicked = false;
    this.collapseAllClicked = true;

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Description' }
    ];
  }

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
  files: TreeNode[] = [];
  cols: any[];


  getFilesystem() {
    this.loder = true;
    let response: any;
    this.netDServ.fetchLocation()
      .subscribe((resp: any) => {
        response = resp;
      }, (error: any) => {
        this.loder = false;
        this.msgSvc.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Unable to fetch cities, if problem persist please connect with admin!' });
      }, () => {
        if (response.success) {
          this.files = response.data;
        }
        this.loder = false;
      });

  }


  expandChildren(node: TreeNode) {


    if (node.children) {
      node.expanded = true;
      for (let cn of node.children) {
        this.expandChildren(cn);
      }
    }
  }



  public expandAll(): void {
    const temp = cloneDeep(this.files);
    temp.forEach((node: any) => {
      this.expandCollapseRecursive(node, true);
    });
    this.files = temp;
    this.expandAllClicked = true;
    this.collapseAllClicked = !this.expandAllClicked;
  }
  public collapseAll(): void {
    const temp = cloneDeep(this.files);
    // const temp =JSON.parse(JSON.stringify(this.files))
    //let temp = Object.assign({}, this.files);

    temp.forEach((node: any) => {
      this.expandCollapseRecursive(node, false);
    });
    this.files = temp;
    this.collapseAllClicked = true;
    this.expandAllClicked = !this.collapseAllClicked;

  }

  private expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  // deepCopy(oldObj: any) {
  //   var newObj = oldObj;
  //   if (oldObj && typeof oldObj === "object") {
  //     if (oldObj instanceof Date) {
  //       return new Date(oldObj.getTime());
  //     }
  //     newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
  //     for (var i in oldObj) {
  //       newObj[i] = this.deepCopy(oldObj[i]);
  //     }
  //   }
  //   return newObj;
  // }

}
