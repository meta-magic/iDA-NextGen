import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceReadinessComponent } from './component/device-readiness.component';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeviceDetailsComponent } from './component/device-details.component';



@NgModule({
  declarations: [DeviceReadinessComponent,DeviceDetailsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      {path:'dReadiness',component:DeviceReadinessComponent}
    ])
  ],
  providers: [DialogService, DynamicDialogRef],
})
export class DeviceReadinessModule { }
