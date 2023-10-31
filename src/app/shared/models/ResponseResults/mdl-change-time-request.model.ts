import { mdl_ApprovalFlowAccessControl, mdl_ApprovalRequests } from "./mdl-approval-requests.model";

export class mdl_ChangeTimeRequest {
  public id: number;
  public employeeID: number;
  public employeeName: string;
  public checkType: string;
  public reason: string;
  public dateCreated: Date;
  public statusID: number;
  public attendanceStatus: string;
  public departmentID: number;
  public attendanceId: number;
  public actionDetailsJson: string;
  public approversJson: string;
  public userID: number;
  public employeeIDs: string;
  public checkTime: Date;
  public newCheckTime: Date;
  public isNewRequest: boolean = false;
  public organizationID: number;
  public createdBy: number;
  public actionBy: number;
  public isSelected: boolean;
  public approvalFlowDetails: mdl_ApprovalRequests[] = [];
  public changeTimeRequestApprovals: mdl_ChangeTimeRequestApprovals[] = [];
  public canApprove: boolean;
  public approvalStatus: number;
  public approvalSequenceNo: number;
  public approvalRequestID: number;
  public approvalFlowAccess: mdl_ApprovalFlowAccessControl = new mdl_ApprovalFlowAccessControl();
  public isAdmin: boolean;
  public checkTimeInOutId: number;
  public checkList: CheckTimeList[] = [];
  public isChangeRequest: boolean = false;

  constructor() {
    this.id = 0;
    this.employeeID = 0;
    this.employeeName = '';
    this.checkType = '';
    this.reason = '';
    this.dateCreated = new Date();
    this.statusID = 0;
    this.attendanceStatus = '';
    this.departmentID = 0;
    this.attendanceId = 0;
    this.actionDetailsJson = '';
    this.approversJson = '';
    this.userID = 0;
    this.employeeIDs = '';
    this.checkTime = new Date();
    this.newCheckTime = new Date();
    this.isNewRequest = false;
    this.organizationID = 0;
    this.createdBy = 0;
    this.actionBy = 0;
    this.isSelected = false;
    this.approvalFlowDetails = [];
    this.changeTimeRequestApprovals = [];
    this.canApprove = false;
    this.approvalStatus = 0;
    this.approvalSequenceNo = 0;
    this.approvalRequestID = 0;
    this.approvalFlowAccess = new mdl_ApprovalFlowAccessControl();
    this.isAdmin = false;
    this.checkTimeInOutId = 0;
    this.checkList = [];
    this.isChangeRequest = false;
  }
}

export class CheckTypeOptions {
  public name: string;
  public checkTypeCode: string;

  constructor() {
    this.name = '';
    this.checkTypeCode = '';
  }
}

export class CheckTimeList {
  public checkTimeInOutId: number;
  public checkTime: Date | null;
  public checkType: string;

  constructor() {
    this.checkTimeInOutId = 0;
    this.checkTime = null;
    this.checkType = '';
  }
}

export class mdl_ChangeTimeRequestApproveParams {
  public id: number;
  public employeeID: number;
  public requestIDs: mdl_ApprovalFlowAccessControl[];
  public attendanceID: number;
  public statusID: number;
  public organizationID: number;
  public userID: number;

  constructor() {
    this.id = 0;
    this.employeeID = 0;
    this.requestIDs = [];
    this.attendanceID = 0;
    this.statusID = 0;
    this.organizationID = 0;
    this.userID = 0;
  }
}



export class mdl_ChangeTimeRequestApprovals {
  public id: number;
  public timeChangeID: number;
  public checkTime?: Date;
  public newCheckTime: Date;
  public isActive: boolean;
  public isNewRequest: boolean;
  public checkType: string;
  public reason: string;
  public statusID: number;
  public organizationID: number;
  public actionBy: number;
  public actionDate: Date;
  public dateCreated: Date;
  public dateModified: Date;

  constructor() {
    this.id = 0;
    this.timeChangeID = 0;
    this.checkTime = undefined;
    this.newCheckTime = new Date();
    this.isActive = false;
    this.isNewRequest = false;
    this.checkType = '';
    this.reason = '';
    this.statusID = 0;
    this.organizationID = 0;
    this.actionBy = 0;
    this.actionDate = new Date();
    this.dateCreated = new Date();
    this.dateModified = new Date();
  }
}


export class mdl_ChangeTimeRequestParams {
  public id: number;
  public employeeID: number;
  public employeeIDs: string;
  public leaveRequestID: number;
  public attendanceID: number;
  public startDate: Date;
  public endDate: Date;
  public legalEntityIDs: string;
  public branchIDs: string;
  public locationIDs: string;
  public statusID: number;
  public organizationID: number;
  public userID: number;

  constructor() {
    this.id = 0;
    this.employeeID = 0;
    this.employeeIDs = '';
    this.leaveRequestID = 0;
    this.attendanceID = 0;
    this.startDate = new Date();
    this.endDate = new Date();
    this.legalEntityIDs = '';
    this.branchIDs = '';
    this.locationIDs = '';
    this.statusID = 0;
    this.organizationID = 0;
    this.userID = 0;
  }
}
