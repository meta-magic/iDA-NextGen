export class schedulerResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:schedulerModel = new schedulerModel();
}

export class schedulerModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}