export class NdComplianceReportDeviceListColumnResponse{
    success:boolean =true;
    message:string ="Network Device Compliance Report Successfully";
    data:NdComplianceReportDeviceListColumnModel = new NdComplianceReportDeviceListColumnModel();
}

export class NdComplianceReportDeviceListColumnModel{
    id :string = "";
    name:string="";
    ise:string= "";
}

export class isemodel{
    id:string="";
    name:string="";
}

