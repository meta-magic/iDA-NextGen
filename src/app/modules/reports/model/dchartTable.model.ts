export class dchartTableResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data: dchartTableModel = new dchartTableModel();
}

export class dchartTableModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}