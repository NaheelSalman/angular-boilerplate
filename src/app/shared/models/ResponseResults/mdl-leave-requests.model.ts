import { mdl_ApprovalFlowAccessControl, mdl_ApprovalRequests } from "./mdl-approval-requests.model";

export class mdlLeaveRequests
{
  public id!: number;
  public employeeID!: number;
  public leaveID!: number;
  public startDate!: Date;
  public endDate!: Date;
  public isActive!: boolean;
  public reason!: string;
  public statusID!: number;
  public organizationID!: number;
  public isStartHalfDay!: boolean;
  public isEndHalfDay!: boolean;
  public actionBy!: number;
  public actionDate!: Date;
  public totalDaysCounted!: number;
  public totalDaysDeducted!: number;
  public dateCreated!: Date;
  public createdBy!: number;
  public dateModified!: Date;
  public modifiedBy!: number;
  public modificationReason!: string;
  public urlPaths!: string[];
  public employeeName!: string;
  public leaveType!: string;
  public leaveStatus!: string;
  public leavesRemaining!: string;
  public approversJson!: string;
  public actionDetailsJson!: string;
  public leaveDocsJson!: string;
  public approvalFlowDetails!: mdl_ApprovalRequests[];
  public leaveRequestApprovals!: mdlLeaveRequestApprovals[];
  public isSelected!: boolean;
  public canApprove!: boolean;
  public approvalStatus!: number;
  public approvalSequenceNo!: number;
  public approvalRequestID!: number;
  public approvalFlowAccess!: mdl_ApprovalFlowAccessControl;
  public docsList!: mdl_LeaveDocs[];
}

export class mdlLeaveRequestApprovals
{
  public id!: number;
  public employeeID!: number;
  public leaveRequestID!: number;
  public leaveID!: number;
  public startDate!: Date;
  public endDate!: Date;
  public isActive!: boolean;
  public reason!: string;
  public statusID!: number;
  public organizationID!: number;
  public isStartHalfDay!: boolean;
  public isEndHalfDay!: boolean;
  public actionBy!: number;
  public actionDate!: Date;
  public totalDaysCounted!: number;
  public totalDaysDeducted!: number;
  public dateCreated!: Date;
  public createdBy!: number;
  public dateModified!: Date;
  public modifiedBy!: number;
  public modificationReason!: string;
}

export class mdl_LeaveDocs
{
  public UrlPath!: string;
}

export class mdl_leaveCounts
{
  public TotalDays!: number;
  public LeavesAppliedThisMonth!: number;
}

export class mdl_LeaveRequestParams
{
  public id!: number;
  public employeeID!: number;
  public employeeIdWise!: string;
  public leaveRequestID!: number;
  public leaveID!: number;
  public startDate!: Date;
  public endDate!: Date;
  public legalEntityIDs!: string;
  public branchIDs!: string;
  public locationIDs!: string;
  public statusID!: number;
  public organizationID!: number;
  public userID!: number;
}

