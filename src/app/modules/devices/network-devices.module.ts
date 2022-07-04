import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkDevicesComponent } from './component/network-devices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import { DeviceOperationsComponent } from './component/device-operations.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocationComponent } from './component/location.component';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { DeviceProfileComponent } from './component/device-profile.component';
import { NdfDescriptionComponent } from './component/ndf-description.component';
import { NewProfileInstructionsComponent } from './component/new-profile-instructions.component';



@NgModule({
  declarations: [
    NetworkDevicesComponent,
    DeviceOperationsComponent,
    LocationComponent,
    DeviceProfileComponent,
    NdfDescriptionComponent,
    NewProfileInstructionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeModule,
    TreeSelectModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      {path:'add',component:NetworkDevicesComponent},
      {path:'profile',component:DeviceProfileComponent},
      {path:'location',component:LocationComponent}
    ])
  ],
  providers: [DialogService, DynamicDialogRef],
})
export class NetworkDevicesModule { }
