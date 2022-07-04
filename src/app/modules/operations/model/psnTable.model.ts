export class psnTableResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data: psnTableModel = new psnTableModel();
}

export class psnTableModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}