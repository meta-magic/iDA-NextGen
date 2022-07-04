import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { MessageService } from "primeng/api";
import { SharedService } from "../../common/service/shared.service";
import { LoginService } from "../service/login.service";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loader: boolean = false;


    constructor(private cookieService: CookieService, private messageService: MessageService, private authService: LoginService, private sharedSvc: SharedService,
        private router: Router) {
        this.loginForm = new FormGroup({
            userName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required, Validators.minLength(5)])
        });
    }


    ngOnInit() {
        this.cookieService.deleteAll('/');
    }

    onSubmit() {
        debugger;
        if (!this.loginForm.valid) {
            this.messageService.add({ key: 'bc', severity: 'error', summary: 'Error', detail: 'Please enter valid login id & password!' });
        } else {
            this.authenticate(this.loginForm.value.userName, this.loginForm.value.password)
        }
    }

    private authenticate(userName: string, password: string) {
       
        this.router.navigate(['/home']);

    }

    forgotPassword() {
        this.router.navigate(['/user/add']);
    }
}