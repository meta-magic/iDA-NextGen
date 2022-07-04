import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
  
})
export class DeviceDetailsComponent implements OnInit {

  constructor() {
  this.marginStyle = { 'margin-left': this.positionLeft, 'margin-top': this.positionTop };
   }

  ngOnInit() {
  }
  marginStyle:any;
  positionLeft = '90px';
  positionTop = '20px';
}
