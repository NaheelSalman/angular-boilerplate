import { mdl_ApprovalRequests, mdl_ApprovalFlowAccessControl } from "./mdl-approval-requests.model";

export class mdl_OvertimeRequest {
  id!: number;
  employeeId!: number;
  employeeName!: string;
  departmentId!: number;
  actionDetailsJson!: string;
  approversJson!: string;
  employeeIds!: string;
  userId!: number;
  dayFrom!: Date;
  dayTo!: Date;
  totalWorkingHours!: string;
  shortWorkTime: Date=new Date();
  leaveId!: number;
  workStation: string='Work From Home';
  reason!: string;
  statusID!: number;
  dateCreated!: Date;
  actionBy!: number;
  organizationId!: number;
  legalEntityIds!: string;
  branchIds!: string;
  locationIds!: string;
  createdBy!: number;
  isSelected: boolean = false;
  approvalFlowDetails: mdl_ApprovalRequests[] = [];
  approvalFlowAccess: mdl_ApprovalFlowAccessControl = new mdl_ApprovalFlowAccessControl();
  isAdmin: boolean = false;
  ovetimeRequestApproval: mdl_OvetimeRequestApproval[] = [];
}
export class mdl_OvertimeRequestParams {
  id!: number;
  employeeId!: number;
  userId!: number;
  leaveId!: number;
  organizationId!: number;
  legalEntityIds!: string;
  branchIds!: string;
  locationIds!: string;
}
export class mdl_OvertimeRequestApprovalParams {
  id!: number;
  leaveId!: number;
  organizationId!: number;
  legalEntityIds!: string;
  branchIds!: string;
  locationIds!: string;
  startDate!: Date;
  endDate!: Date;
  employeeId!: number;
  userId!: number;
  statusId!: number;
  requestIds: mdl_ApprovalFlowAccessControl[] = [];
  monthToBeEffected!: Date;
}
export class mdl_OvetimeRequestApproval {
  id!: number;
  overtimerequestId!: number;
  employeeId!: number;
  userId!: number;
  dayFrom!: Date;
  dayTo!: Date;
  totalWorkingHours!: string;
  leaveId!: number;
  workStation!: string;
  reason!: string;
  statusId!: number;
  shortWorkTime!: Date;
  dateCreated!: Date;
  actionBy!: number;
  actionDate!: Date;
  monthToBeEffected!: Date;
  createdBy!: number;
  organizationId!: number;
}
