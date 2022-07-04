import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ndfModel, ndfResponse } from 'src/app/modules/devices/model/ndfTable.model';
import { ndfTableService } from 'src/app/modules/devices/service/ndfTable.service';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewProfileInstructionsComponent } from './new-profile-instructions.component';



@Component({
  selector: 'app-ndf-description',
  templateUrl: './ndf-description.component.html',
  styleUrls: ['./ndf-description.component.scss']
})
export class NdfDescriptionComponent implements OnInit {

  ref:any;

  loader: boolean = false;
  ndf: ndfModel[] = [];
  displayedColumns: string[] = [];

  constructor(private ndftableservice: ndfTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router,public dialogService: DialogService) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.ndf = [];
    this.fetchConfigPushDetails();

  }

  fetchConfigPushDetails() {
    this.loader = true;
    let response: any;
    this.ndf = [];
    this.ndftableservice.fetchNdfDetails().subscribe((resp: ndfResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.ndf = response.data;

        }
        this.loader = false;
      })

  }

  openInstructions(){
    this.ref = this.dialogService.open(NewProfileInstructionsComponent, {
      header: 'Instructions',
      width: '70%',
      contentStyle: {"max-height": "70vh", "overflow": "auto"},
      // baseZIndex: 10000
  });

  this.ref.onClose.subscribe((device: any) =>{
      if (device) {
          this.messageService.add({severity:'info', summary: 'Ganesh', detail: 'Ganesh'});
      }
  });

  }

}
