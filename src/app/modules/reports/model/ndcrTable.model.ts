export class ndcrTableResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data: ndcrTableModel = new ndcrTableModel();
}

export class ndcrTableModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}