import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ise-env-setup',
  templateUrl: './ise-env-setup.component.html',
  styleUrls: ['./ise-env-setup.component.scss']
})
export class IseEnvSetupComponent implements OnInit {

  importedDevice: any;
  productDialog: boolean = false;
  submitted: boolean = false;


  productDialog1: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addPSN() {
    this.importedDevice = {};
    this.submitted = false;
    this.productDialog = true;
}

addLB(){
  this.importedDevice = {};
  this.submitted = false;
  this.productDialog1 = true;
}

}
