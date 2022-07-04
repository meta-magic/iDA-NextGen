export class lbTableResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data: lbTableModel = new lbTableModel();
}

export class lbTableModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}