export class ndfResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:ndfModel = new ndfModel();
}

export class ndfModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}