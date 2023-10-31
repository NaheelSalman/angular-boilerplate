import {mdl_GlobalPermissions} from '../models/Requests/mdl-global-permissions.model';
import { tbl_Employee } from '../models/Tables/tbl-employee.model';
import {tbl_Organization} from '../models/Tables/tbl-organization.model';
export class UserInfo {
  public id: number;
  public organizationID: number;
  public branchID: number;
  public employeeDetails: tbl_Employee;
  public organizationDetails: tbl_Organization;
  public permissions: mdl_GlobalPermissions;
  public selectedLegalEntities: string;
  public selectedLocations: string;
  public selectedBranches: string;
  public userTypeID: number;
  public uniqueID: string | null;
  public employees: any;
  public token: string | null;
  public fcmToken: string;
  public refreshToken: string | null;
  public name: string;
  public apiUrl: any|null;
  public class: string;
  public isInformationComplete: boolean;
  public exDate: Date;
  public gp: number;
  public licenseExpiryDate: Date;
  public licenseGracePeriod: number;
  public pageIDs: string;

  constructor() {
    this.id = 0;
    this.organizationID = 0;
    this.branchID = 0;
    this.employeeDetails = new tbl_Employee();
    this.organizationDetails = new tbl_Organization();
    this.permissions = new mdl_GlobalPermissions();
    this.selectedLegalEntities = "";
    this.selectedLocations = "";
    this.selectedBranches = "";
    this.userTypeID = 0;
    this.uniqueID = null;
    this.employees = 0;
    this.token = null;
    this.fcmToken = "";
    this.refreshToken = null;
    this.name = "";
    this.class = "";
    this.isInformationComplete = false;
    this.exDate = new Date();
    this.gp = 0;
    this.licenseExpiryDate = new Date();
    this.licenseGracePeriod = 0;
    this.pageIDs = "";
    this.apiUrl=null;
  }
}


export enum Pages {
  dashboard = 1,
  timeline = 407,
  organizationSettings = 381,

  // settings section
  departments = 83,
  addEditDepartments = 403,
  deleteDepartments = 404,
  jobTitles = 85,
  softwareRoles = 388,
  softwareRolePermissions = 389,
  rolePermissionsTemplate = 402,
  workShift = 397,
  addWorkshift = 411,
  addAttendanceRules = 2389,
  attendanceRule = 2388,
  leaves = 2394,
  addLeaves = 2395,

  // employee section
  employeeList = 2391,
  addEmployee = 2392,
  viewProfile = 2393,

  // attendance section
  attendanceManagement = 2397,
  attendanceReport = 3396,
  settlement = 4404,

  // payroll
  payrollConfigurations = 4401,
  payrollCalculator = 4402,

  // self service
  leaveRequest = 6427,
  loanRequest = 6433,
  attendanceRequest = 6437,
  resignationRequest = 6433,

  // leave module
  leaveReport = 6431,

  // hr
  employeesManagement = 6444,
  promotion = 6447,
}

export enum Status
{
    //For Approved Requests Status will be 0
    Nothing,
    Requested,//1
    Approved,//2
    Rejected

}
