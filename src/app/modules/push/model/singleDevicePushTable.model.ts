export class SingleDeviceListResponse{
    success:boolean =true;
    message:string ="Single Device Return Successfully";
    data:SingleDeviceListModel = new SingleDeviceListModel();
}

export class SingleDeviceListModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}