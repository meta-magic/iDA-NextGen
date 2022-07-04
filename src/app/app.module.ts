
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeNGComponentModule } from 'src/primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DeviceReadinessComponent } from './modules/deviceReadiness/component/device-readiness.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        
        BrowserAnimationsModule,
        PrimeNGComponentModule
  ],
  providers: [MessageService, ConfirmationService],

  bootstrap: [AppComponent]
})
export class AppModule { }
