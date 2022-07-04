export class customersHomeList{
    id:string ="";
    name:string="";
}

export class Menu {
    title: string;
    icon: string;
    routeLink: string;
    active: boolean;
    expanded: boolean = false;
    children: MenuChild[] = []
    constructor(menu1: string, icon: string, routeLink1: string){
        this.title = menu1;
        this.icon = icon;
        this.routeLink = routeLink1;
        this.active = false;
        
    }
}

export class MenuChild{
    title: string;
    icon: string;
    routeLink: string;
    active: boolean;
    breadCrumb:string[]=[];
    constructor(menu1: string, icon: string, routeLink1: string,breadCrumb:string[]){
        this.title = menu1;
        this.icon = icon;
        this.routeLink = routeLink1;
        this.active = false;
        this.breadCrumb=breadCrumb;
    }
}