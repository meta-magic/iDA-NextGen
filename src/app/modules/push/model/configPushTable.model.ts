export class configListResponse{
    success:boolean =true;
    message:string ="Config Push Return Successfully";
    data:configListModel = new configListModel();
}

export class configListModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}