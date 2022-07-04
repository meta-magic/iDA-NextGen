export class MultipleDeviceListColumnResponse{
    success:boolean =true;
    message:string ="Multiple Device Return Successfully";
    data:MultipleDeviceListColumnModel = new MultipleDeviceListColumnModel();
}

export class MultipleDeviceListColumnModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}