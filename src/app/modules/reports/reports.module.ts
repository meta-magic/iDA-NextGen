import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './component/validation.component';
import { PortSummaryComponent } from './component/port-summary.component';
import { NetworkDeviceComplianceComponent } from './component/network-device-compliance.component';
import { ShedulerAssistantComponent } from './component/sheduler-assistant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { RouterModule } from '@angular/router';
import { PortSummaryReportDetailsComponent } from './component/port-summary-report-details.component';
import { PortSummaryDeviceDetailsComponent } from './component/port-summary-device-details.component';
import { PortSummaryGenerateReportComponent } from './component/port-summary-generate-report.component';
import { PortDeviceListColumnComponent } from './component/port-device-list-column.component';
import { NdcrTableComponent } from './component/ndcrTable.component';
import { DChartTableComponent } from './component/dChartTable.component';
import { DeviceChartPageComponent } from './component/device-chart-page.component';
import { NewComplianceReportDefinitionComponent } from './component/new-compliance-report-definition.component';
import { NetworkDeviceDetailsOverlayComponent } from './component/network-device-details-overlay.component';
import { NdcrDevSumComponent } from './component/ndcr-Dev-Sum.component';
import { PortDevDetailsComponent } from './component/port-Dev-Details.component';





@NgModule({
  declarations: [
    NdcrDevSumComponent,
    PortDevDetailsComponent,
    DChartTableComponent,
    DeviceChartPageComponent,
    ValidationComponent,
    PortSummaryComponent,
    NetworkDeviceComplianceComponent,
    ShedulerAssistantComponent,
    PortSummaryReportDetailsComponent,
    PortSummaryDeviceDetailsComponent,
    PortSummaryGenerateReportComponent,
    PortDeviceListColumnComponent,
    NdcrTableComponent,
    NewComplianceReportDefinitionComponent,
    NetworkDeviceDetailsOverlayComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNGComponentModule,
    RouterModule.forChild([
      {path:'validation',component:ValidationComponent},
      {path:'postsummary',component:PortSummaryComponent},
      {path:'networkDeviceCompliance',component:NetworkDeviceComplianceComponent},
      {path:'shedulerAssistant',component:ShedulerAssistantComponent},

    ])
  ]
})
export class ReportsModule { }
