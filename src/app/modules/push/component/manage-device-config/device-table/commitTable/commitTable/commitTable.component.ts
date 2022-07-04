import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { commitModel, commitResponse } from 'src/app/modules/push/model/commitTable.model';
import { commitService } from 'src/app/modules/push/service/commit.service';

@Component({
  selector: 'app-commitTable',
  templateUrl: './commitTable.component.html',
  styleUrls: ['./commitTable.component.scss']
})
export class CommitTableComponent implements OnInit {

  loader: boolean = false;
  commit: commitModel[] = [];
  displayedColumns: string[] = [];

  constructor(private commitservice: commitService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  // ngOnInit() {
  // }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.commit = [];
    this.fetchAllDeviceDetails();

  }

  fetchAllDeviceDetails() {
    this.loader = true;
    let response: any;
    this.commit = [];
    this.commitservice.fetchCommitDetails().subscribe((resp: commitResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.commit = response.data;

        }
        this.loader = false;
      })

  }

}
