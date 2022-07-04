export class MultipleDeviceListResponse{
    success:boolean =true;
    message:string ="Multiple Device Return Successfully";
    data:MultipleDeviceListModel = new MultipleDeviceListModel();
}

export class MultipleDeviceListModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}