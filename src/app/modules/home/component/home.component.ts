import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { MenuItem, MessageService, PrimeNGConfig } from "primeng/api";
import { Menu, MenuChild } from "../model/home.model";
import { environment } from "src/environments/environment";
import { SharedService } from "../../common/service/shared.service";
import { customersHomeList } from "../model/home.model";
import { HomeService } from "../service/home.service";
import { MenuService } from "../service/menu.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {

    menus: Menu[] = [];
    userName: string;
    showSideNav = true;
    partnerLogo: string = "";
    currentDate: Date;
    routeInfo: any[];
    customers: customersHomeList[];
    profileSettting: MenuItem[];
    
    active = false;

    menuSourceSubscription: Subscription;

    menuResetSubscription: Subscription;

    key: string;

    constructor(private messageService: MessageService, private primengconfig: PrimeNGConfig, 
        private cookieService: CookieService, private sharedSvc: SharedService, private router: Router,
         private homeService: HomeService,private menuService: MenuService) {
        this.userName = "John Doe";
        this.currentDate = new Date();
        this.routeInfo = [];
        this.primengconfig.ripple = true;
        this.profileSettting = [
            {
                label: 'Profile',
                items: [
                {
                    label: 'Profile Settings',
                    icon: 'fa fa-user',
                    routerLink: '/fileupload'
                },
                {
                    label: 'Logout',
                    icon: 'fa fa-sign-out',
                    routerLink: '/fileupload',
                    command: () => {
                        this.logout();
                    }
                }
                ],
                
            },
            {
                label: 'Menu Type',
                items: [
                {
                    label: 'Vertical',
                    icon: 'fa fa-certificate',
                    command: () => {
                        this.update();
                    }
                },
                {
                    label: 'Horizontal',
                    icon: 'fa fa-certificate',
                    command: () => {
                        this.update();
                    }
    
                }
                ],
                
            }
        ];

        this.customers = [
            {
                id: "Philip",
                name: "Philip"
            },
            {
                id: "mary",
                name: "Marry Ellen"
            },
            {
                id: "toni",
                name: "Toni Macy"
            }
        ];

        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

    }


    ngOnInit() {
        this.fetchLoginUserInfo();
    }

    fetchLoginUserInfo() {
        let response: any;
        this.homeService.fetchLoginUserInfo()
            .subscribe((resp: any) => {
                response = resp;
            }, (error: any) => {

            }, () => {
                this.menus = response.data;
            });
    }

    onSubMenuClick(menu: MenuChild) {
        this.routeInfo = menu.breadCrumb;
        this.router.navigate([menu.routeLink]);
    }

    onMenuClick(menu: Menu) {

        if ((menu.children && menu.children.length === 0) || (!menu.children && menu.routeLink && menu.routeLink.length > 0)) {
            //this.routeInfo = menu;
            //this.navigate(menu.routeLink);
        }
        else if (menu.children && menu.children.length > 0) {
            menu.expanded = !menu.expanded;
        }


        // Menus Expanded dynamic
        this.menus.forEach(element => {
            if (element.title != menu.title) {
                element.expanded = false;
            }
        });

    }

    toggleSideNav() {
        this.showSideNav = !this.showSideNav;
    }

    private navigate(routeLink: string) {
        if (routeLink && routeLink.length > 0) {
            this.router.navigate([routeLink]);
        } else {
            this.router.navigate(['/home/wip'])
        }
    }

    logout() {
        this.cookieService.deleteAll();
        this.router.navigate(['/']);
    }
    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }

    homeClick(routeInfo:any){
        debugger;
        this.routeInfo =this.menus[1].children[0].breadCrumb
        this.router.navigate([this.menus[1].children[0].routeLink]);
    }

}