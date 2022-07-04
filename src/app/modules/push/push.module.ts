import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDevicePushComponent } from './component/single-device-push/single-device-push.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import { MultipleDevicePushComponent } from './component/multiple-device-push/multiple-device-push/multiple-device-push.component';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DividerModule} from 'primeng/divider';
import {PanelModule} from 'primeng/panel';
import { CommitTableComponent } from './component/manage-device-config/device-table/commitTable/commitTable/commitTable.component';
import { ManageDeviceConfigPushComponent } from './component/manage-device-config/manage-device-config-push/manage-device-config-push.component';
import { MultipleDeviceListColumnComponent } from './component/multiple-device-push/multiple-Device-List-Column/multiple-device-list-column/multiple-device-list-column.component';
import { MultipleDevicePushTableComponent } from './component/multiple-device-push/multiple-device-push-table/multipleDevicePushTable/multipleDevicePushTable.component';
import { SingleDeviceListColumnComponent } from './component/single-device-push/single-Device-List-Column/single-device-list-column/single-device-list-column.component';
import { SingleDevicePushTableComponent } from './component/single-device-push/single-device-push-table/singleDevicePushTable/singleDevicePushTable.component';
import { ValidateComponent } from './component/manage-device-config/device-table/validateTable/validate/validate.component';
import { DTableComponent } from './component/manage-device-config/device-table/dTable/dTable.component';
import { CPushTableComponent } from './component/manage-device-config/device-table/cPushTable/cPushTable.component';



@NgModule({
  declarations: [
    SingleDevicePushComponent,
    MultipleDevicePushComponent,CommitTableComponent,ManageDeviceConfigPushComponent,MultipleDeviceListColumnComponent,
    MultipleDevicePushTableComponent,MultipleDevicePushComponent,
    SingleDevicePushComponent,SingleDeviceListColumnComponent,SingleDevicePushTableComponent,ValidateComponent,DTableComponent,
    CommitTableComponent,CPushTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    ReactiveFormsModule,
    HttpClientModule,
    DividerModule,
    CardModule,
    InputTextModule,
    PaginatorModule,
    CheckboxModule,
    ListboxModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      {path:'singleDevice',component:SingleDevicePushComponent},
      {path:'multiDevice',component:MultipleDevicePushComponent},
      {path:'managedeviceconfigpush',component:ManageDeviceConfigPushComponent}

    ])
  ],
  exports:[
    SingleDevicePushComponent,MultipleDevicePushComponent,ManageDeviceConfigPushComponent
  ]
})
export class PushModule { }
