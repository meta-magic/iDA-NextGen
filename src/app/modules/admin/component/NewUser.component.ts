import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { userTableService } from '../service/userTable.service';

@Component({
  selector: 'app-NewUser',
  templateUrl: './NewUser.component.html',
  styleUrls: ['./NewUser.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private usertableservice: userTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

  ngOnInit() {
  }


  goback(){
    this.router.navigate(['/home/admin/userManagment']);
  }
}
