import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomerListModel, CustomerListResponse } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  loader: boolean = false;
  customers: CustomerListModel[] = [];
  displayedColumns: string[] = [];


  constructor(private customerService: CustomerService, private messageService: MessageService,
     private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  ngOnInit(): void {
    this.init();
    this.displayedColumns = ['name', 'group', 'url', 'action'];
  }

  init() {
    this.loader = true;
    this.customers = [];
    this.fetchAllcustomers();

  }

  fetchAllcustomers() {
    this.loader = true;
    let response: any;
    this.customers = [];
    this.customerService.fetchAllCustomer().subscribe((resp: CustomerListResponse) => { response = resp },
      (error: any) => {
        this.loader = false;

      }, () => {

        if (response.success) {
          this.customers = response.data;

        }
        this.loader = false;
      })

  }

  addCustomer(){
    this.router.navigate(['home/customer/add']);
  }


  navigateEditCustomer(entity:any){
    this.router.navigate(['home/customer/add']);
  }

}
