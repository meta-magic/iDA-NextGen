import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { PrimeNGComponentModule } from "src/primeng.module";
import { ReportsModule } from "../reports/reports.module";
import { HomeComponent } from "./component/home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PrimeNGComponentModule,
        RouterModule.forChild([
            {
                path: '', component: HomeComponent,children:[
                    {path:'customer', loadChildren:()=>import("../customer/customer.module").then(m=>m.CustomerModule)},
                    {path:'admin', loadChildren:()=>import("../admin/admin.module").then(m=>m.AdminModule)},
                    {path:'devices', loadChildren:()=>import("../devices/network-devices.module").then(m=>m.NetworkDevicesModule)},
                    {path:'push',loadChildren:()=>import("../push/push.module").then(m=>m.PushModule)},
                    {path:'deviceReadiness',loadChildren:()=>import("../deviceReadiness/device-readiness.module").then(m=>m.DeviceReadinessModule)},
                    {path:'reports',loadChildren:()=>import("../reports/reports.module").then(m=>m.ReportsModule)},
                    {path:'operations',loadChildren:()=>import("../operations/operations.module").then(m=>m.OperationsModule)}
                ]
            },

        ]),

    ]
})
export class HomeModule {

}