export class CustomerListResponse{
    success:boolean =true;
    message:string ="Customers Return Successfully";
    data:CustomerListModel = new CustomerListModel();
}

export class CustomerListModel{
    id :string = "";
    name:string="";
    ise:string= "";

}

export class isemodel{
    id:string="";
    name:string="";
    
}