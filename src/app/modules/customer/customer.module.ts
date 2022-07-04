import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './component/customer-list.component';
import { NewCustomerComponent } from './component/new-customer.component';
import { CustomerDetailsComponent } from './component/customer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import { CompatibilityGuidComponent } from './component/compatibility-guid.component';
import { LicensesComponent } from './component/licenses.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    NewCustomerComponent,
    CustomerDetailsComponent,
    CompatibilityGuidComponent,
    LicensesComponent
  ],
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PrimeNGComponentModule,
        RouterModule.forChild([
          {path:'list',component:CustomerListComponent},
          {path:'add',component:NewCustomerComponent},
          {path:'id/update',component:CustomerDetailsComponent},
          {path:'id/edit',component:NewCustomerComponent},
          {path:'comp',component:CompatibilityGuidComponent},
          {path:'licenses',component:LicensesComponent}
        ])
  ]
})
export class CustomerModule { }
