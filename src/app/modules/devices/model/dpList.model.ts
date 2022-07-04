export class dpListResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:dpListModel = new dpListModel();
}

export class dpListModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}