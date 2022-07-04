import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { userTableModel, userTableResponse } from 'src/app/modules/admin/model/userTable.model';
import { userTableService } from 'src/app/modules/admin/service/userTable.service';
import { NewUserComponent } from './NewUser.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {

  loader: boolean = false;
  userData: userTableModel[] = [];

  ref:any;

  constructor(private usertableservice: userTableService, private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService,private router:Router) { }

    ngOnInit(): void {
      this.init();
    }

    addNewUser(){
      this.router.navigate(['home/admin/addUser']);
    }

    init() {
      this.loader = true;
      this.userData = [];
      this.fetchUserTableDetails();
    }
  
    fetchUserTableDetails() {
      this.loader = true;
      let response: any;
      this.userData = [];
      this.usertableservice.fetchUserTableDetails().subscribe((resp: userTableResponse) => { response = resp },
        (error: any) => {
          this.loader = false;
        }, () => {
  
          if (response.success) {
            this.userData = response.data;
  
          }
          this.loader = false;
        })
  
    }

//     openNewUser(){
//       this.ref = this.dialogService.open(NewUserComponent, {
//         header: 'New User',
//         width: '70%',
//         contentStyle: {"max-height": "70vh", "overflow": "auto"},
//         baseZIndex: 10000
//       });

//       this.ref.onClose.subscribe((device: any) =>{
//           if (device) {
//               this.messageService.add({severity:'info', summary: 'Ganesh', detail: 'Ganesh'});
//           }
//       });

// }


// navigateToPartnerList() {
//   this.router.navigate(['/home/customer/list']);
// }

editUser(){
   this.router.navigate(['/home/admin/addUser']);

}

deleteUser(){

}

changePasword(){
  
}

}
