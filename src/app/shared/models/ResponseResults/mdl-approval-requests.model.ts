export class mdl_ApprovalRequests {
  public id: number;
  public moduleID: number;
  public approvalID: number;
  public employeeID: number;
  public requestID: number;
  public sequenceID: number;
  public approvalBy: number;
  public statusID: number;
  public approvalSetupID: number;
  public dateCreated: Date;
  public isRestricted: boolean;
  public approvers: string;

  constructor() {
    this.id = 0;
    this.moduleID = 0;
    this.approvalID = 0;
    this.employeeID = 0;
    this.requestID = 0;
    this.sequenceID = 0;
    this.approvalBy = 0;
    this.statusID = 0;
    this.approvalSetupID = 0;
    this.dateCreated = new Date();
    this.isRestricted = false;
    this.approvers = '';
  }
}

export class mdl_ApprovalFlowAccessControl {
  public id: number;
  public canApprove: boolean;
  public statusID: number;
  public sequenceNo: number;
  public requestID: number;

  constructor() {
    this.id = 0;
    this.canApprove = false;
    this.statusID = 0;
    this.sequenceNo = 0;
    this.requestID = 0;
  }
}
