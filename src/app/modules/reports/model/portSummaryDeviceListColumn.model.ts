export class PortDeviceListColumnResponse{
    success:boolean =true;
    message:string ="Multiple Device Return Successfully";
    data:PortDeviceListColumnModel = new PortDeviceListColumnModel();
}

export class PortDeviceListColumnModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}