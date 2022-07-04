export class SingleDeviceListColumnResponse{
    success:boolean =true;
    message:string ="Multiple Device Return Successfully";
    data:SingleDeviceListColumnModel = new SingleDeviceListColumnModel();
}

export class SingleDeviceListColumnModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}