import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IseEnvSetupComponent } from './component/ise-env-setup.component';
import { ManageServiceTemplateComponent } from './component/manage-service-template.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import { ManageDeviceConfigurationComponent } from './component/manage-device-configuration.component';
import { NewServiceTemplateComponent } from './component/new-service-template.component';
import { ActiveTemplateDevicePageComponent } from './component/active-template-device-page.component';
import { MstDeviceDescriptionComponent } from './component/mst-device-description.component';
import { ManageServTemplateListColumnComponent } from './component/manage-serv-template-list-column.component';
import { PsnTableComponent } from './component/psnTable.component';
import { LbTableComponent } from './component/lbTable.component';



@NgModule({
  declarations: [
    PsnTableComponent,
    LbTableComponent,
    IseEnvSetupComponent,
    ManageServiceTemplateComponent,
    ManageDeviceConfigurationComponent,
    ManageServTemplateListColumnComponent,
    NewServiceTemplateComponent,
    ActiveTemplateDevicePageComponent,
    MstDeviceDescriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      {path:'iseenvsetup',component:IseEnvSetupComponent},
      {path:'manageServiceTemplate',component:ManageServiceTemplateComponent},
      {path:'manageDeviceConfig',component:ManageDeviceConfigurationComponent}
    ])
  ]
})
export class OperationsModule { }
