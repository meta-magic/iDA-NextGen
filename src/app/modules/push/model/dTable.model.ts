export class DeviceListResponse{
    success:boolean =true;
    message:string ="Device Return Successfully";
    data:DeviceListModel = new DeviceListModel();
}

export class DeviceListModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}