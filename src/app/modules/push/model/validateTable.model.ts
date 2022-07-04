export class validateResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:validateModel = new validateModel();
}

export class validateModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}