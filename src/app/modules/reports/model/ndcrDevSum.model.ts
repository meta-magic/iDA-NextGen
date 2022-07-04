export class ndcrDevSumResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data: ndcrDevSumModel = new ndcrDevSumModel();
}

export class ndcrDevSumModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}