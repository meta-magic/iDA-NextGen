import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSetupComponent } from './component/email-setup.component';
import { FtpSftpSetupComponent } from './component/ftp-sftp-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './component/user-management.component';
import { NewUserComponent } from './component/NewUser.component';



@NgModule({
  declarations: [
    EmailSetupComponent,
    FtpSftpSetupComponent,
    UserManagementComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      { path: 'emailsetup', component: EmailSetupComponent },
      { path: 'ftpsetup', component: FtpSftpSetupComponent },
      { path: 'userManagment', component: UserManagementComponent },
      {path:'addUser',component:NewUserComponent}
    ])
  ]
})
export class AdminModule { }
