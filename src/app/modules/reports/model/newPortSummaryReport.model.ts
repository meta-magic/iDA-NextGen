export class portResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data: portModel = new portModel();
}

export class portModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}