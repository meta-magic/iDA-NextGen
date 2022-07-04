export class commitResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:commitModel = new commitModel();
}

export class commitModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}