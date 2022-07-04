import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { validateModel, validateResponse } from 'src/app/modules/push/model/validateTable.model';
import { validateService } from 'src/app/modules/push/service/validate.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  loader: boolean = false;
  validate: validateModel[] = [];
  displayedColumns: string[] = [];

  constructor(private validateservice: validateService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  
  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.validate = [];
    this.fetchAllDeviceDetails();

  }

  fetchAllDeviceDetails() {
    this.loader = true;
    let response: any;
    this.validate = [];
    this.validateservice.fetchValidateDetails().subscribe((resp: validateResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.validate = response.data;

        }
        this.loader = false;
      })

  }

}
