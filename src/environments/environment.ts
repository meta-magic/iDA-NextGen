// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Menu } from "src/app/modules/home/model/home.model";

export const environment = {
  production: false,
  baseUrl:"http://localhost:8080",
  menus: 'assets/data/menu.json',

  //Customers

  customers: 'assets/data/customer.json',

  country: "http://localhost:7074/md/api/v1/country/",
  states: "http://localhost:7074/md/api/v1/country/{country}/states/",
  city: "http://localhost:7074/md/api/v1/country/{country}/states/{state}/cities/",

  importedDevice: "assets/data/importedDevice.json",

  //Counrty
  countryList: "assets/data/dropdown/country.json",
  stateList: "assets/data/dropdown/state.json",
  cityList: "assets/data/dropdown/city.json",
  guidList: "assets/data/dropdown/guidList.json",
  assessmentType: "assets/data/dropdown/assessmentType.json",

  proxyType: "assets/data/dropdown/proxyType.json",
  productType: "assets/data/dropdown/productType.json",

  networkDevices: "assets/data/networkDevices.json",

  deviceReadiness: "assets/data/deviceReadiness.json",

  location: "assets/data/location.json",

  locations: "assets/data/location_v1.json",
  files: "assets/data/files.json",



  portSummary: "assets/data/portSummaryReport.json",
  portSummaryReports: "assets/data/portsummaryreports.json",

  ganesh: "assets/data/portSummaryReport_new.json",




  // Managed Device Config Page 

  // Assign Template and Device Tab 

  manageDeviceConfiguration: 'assets/data/configDesc.json',

  templateDevice: 'assets/data/templateType.json',

  // Configuration Push Tab 

  environmentForConfigPush: 'assets/data/deviceConfigPushTable.json',

  // Single Device Config Push

  environmentForSingleDevicePush: 'assets/data/singleDeviceConfig.json',

  // Multiple Device Config Push 

  environmentForMultipleDevicePush: 'assets/data/multipleDeviceConfig.json',

  // Left side Device List column in Push Page 

  environmentForDeviceListInPush: 'assets/data/deviceListInPush.json',

  // Manage Device Config Push Validate Tab 

  environmentForManageDeviceValidate: 'assets/data/manageDeviceValidate.json',

  // Manage Device Config Push Commit Tab 

  environmentForManageDeviceCommit: 'assets/data/manageDeviceCommit.json',



  // ISE Environment Setup 

  envForLoadBalancer: "assets/data/iseLoadBalancer.json",

  envForPSN: "assets/data/isePSN.json",

  // Report Screen 

  // Validation Report 

  environmentForValidateReport: 'assets/data/validateInReport.json',

  // Scheduler Assistent Report 
  environmentForSchedulerAssistent: 'assets/data/schedulerAssistent.json',


  newPortSummany: 'assets/data/newPortSummaryReport.json',

  portSummaryDeviceList: "assets/data/portSummaryReport_new.json",

  // Setup/Device Profile
  envForDeviceProfile: 'assets/data/deviceProfileList.json',

  // Network Device Profiles Associated Device Table 

  enfForNdf: 'assets/data/ndfTable.json',



  // Manage Service Template Page 

  environmentForManageServTemplate: 'assets/data/aTemplateListTitle.json',


  // Network Device Compliance Report 
  envForNdComplainceReport: 'assets/data/ndComplianceReport.json',
  envForNdcrTable: 'assets/data/ndcrTable.json',
  envForDChartTable: 'assets/data/dchartTable.json',

  // Admin User Management Page 
  envForUserManage: 'assets/data/userManage.json',

  // Search Operation Single Device 
  deviceTypes: "assets/data/dropdown/deviceTypes.json",
  osVersions: "assets/data/dropdown/osVersions.json",

  //filterlist

  filterList: "assets/data/dropdown/filterList.json",

  envForNdcrDevSum: 'assets/data/ndcrDevSum.json',

  // Port Summary Tab Device Details Overlay 
  envForPortDevDetails: 'assets/data/portDevDetails.json',


};
