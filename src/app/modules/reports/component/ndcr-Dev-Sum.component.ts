import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ndcrDevSumModel, ndcrDevSumResponse } from 'src/app/modules/reports/model/ndcrDevSum.model';
import { ndcrDevSumService } from '../service/ndcrDevSum.service';

@Component({
  selector: 'app-ndcr-Dev-Sum',
  templateUrl: './ndcr-Dev-Sum.component.html',
  styleUrls: ['./ndcr-Dev-Sum.component.scss']
})
export class NdcrDevSumComponent implements OnInit {

  loader: boolean = false;
  ndcrDevSumData: ndcrDevSumModel[] = [];

  constructor(private ndcrdevsumservice: ndcrDevSumService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

    ngOnInit(): void {
      this.init();
    }


    init() {
      this.loader = true;
      this.ndcrDevSumData = [];
      this.fetchNdcrDevSumDetails();      
    }
  
    fetchNdcrDevSumDetails() {
      this.loader = true;
      let response: any;
      this.ndcrDevSumData = [];
      this.ndcrdevsumservice.fetchNdcrDevSumDetails().subscribe((resp: ndcrDevSumResponse) => { response = resp },
        (error: any) => {
          this.loader = false;
  
        }, () => {
  
          if (response.success) {
            this.ndcrDevSumData = response.data;
  
          }
          this.loader = false;
        })
  
    }
    displayPosition: boolean;
    position:string;
    showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
    }

}
