export class PortDevDetailsResponse{
    success:boolean =true;
    message:string ="Single Device Return Successfully";
    data:PortDevDetailsModel = new PortDevDetailsModel();
}

export class PortDevDetailsModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}