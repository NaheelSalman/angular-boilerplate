export class ReqLeavesrequest
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
  public isWithdrawRequest!: boolean;
  public actionDate!: Date;
  public totalDaysCounted!: number;
  public totalDaysDeducted!: number;
  public dateCreated!: Date;
  public createdBy!: number;
  public dateModified!: Date;
  public modifiedBy!: number;
  public modificationReason!: string;
  public urlPaths: string[] = [];
}
