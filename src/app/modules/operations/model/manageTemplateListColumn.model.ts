export class ManServDeviceListColumnResponse{
    success:boolean =true;
    message:string ="Multiple Device Return Successfully";
    data:ManServDeviceListColumnModel = new ManServDeviceListColumnModel();
}

export class ManServDeviceListColumnModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}

