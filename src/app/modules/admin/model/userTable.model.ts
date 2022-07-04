export class userTableResponse{
    success:boolean =true;
    message:string ="User Management data Successfully";
    data: userTableModel = new userTableModel();
}

export class userTableModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}