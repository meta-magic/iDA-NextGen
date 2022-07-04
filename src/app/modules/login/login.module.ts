import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { PrimeNGComponentModule } from "src/primeng.module";
import { LoginComponent } from "./component/login.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PrimeNGComponentModule,
        RouterModule.forChild([
            {
                path: '', component: LoginComponent
            },

        ]),

    ]
})
export class LoginModule {

}