export class mdl_CheckTimeInOut {
  public id: number;
  public userID: number;
  public organizationID: number;
  public name: string;
  public checkTime: Date;
  public newCheckTime: Date | null;
  public checkType: string;
  public description: string;
  public locationLatitude: string;
  public locationLongitude: string;
  public locationAddress: string;
  public isRemoteTimeIn: boolean;
  public remarks: string;
  public checkInRemarks: string;
  public checkOutRemarks: string;
  public designation: string;
  public department: string;
  public legalEntity: string;
  public branch: string;
  public location: string;
  public employeeNo: number;
  public createdOn: Date;
  public modifiedOn: Date;
  public shiftStartTime: string | null;
  public shiftEndTime: string | null;
  public shiftHours: string | null;
  public breakTime: string;
  public workingHours: string | null;
  public graceTime: string | null;
  public checkIn: Date;
  public checkOut: Date;
  public date: Date;
  public timeInOffice: string;
  public workTime: string;
  public lateTime: string;
  public difference: string;
  public earlyTime: string;
  public earlyMints: number;
  public isLate: boolean;
  public isEarly: boolean;
  public requiredHours: string | null;
  public checkInData: string;
  public checkOutData: string;
  public checkInDetails: mdl_CheckTimeInOut;
  public checkOutDetails: mdl_CheckTimeInOut;
  public deptID: number;
  public mainDeptID: number;
  public jobTitleID: number;
  public workShiftID: number;
  public workMints: number;
  public deviations: number;
  public halfDays: number;
  public absents: number;
  public informReason: string;
  public isInformed: boolean;
  public informedAddedBy: number;
  public overTime: string;
  public overTimeMints: number;
  public checkInFormatted: string;
  public checkOutFormatted: string;
  public responseStartDate: Date;
  public responseEndDate: Date;
  public responseElapsed: string;
  public dateCreated: Date;
  public requiredHoursString: string;
  public isLoadingCheckIn: boolean;
  public isLoadingCheckOut: boolean;

  constructor() {
    this.id = 0;
    this.userID = 0;
    this.organizationID = 0;
    this.name = '';
    this.checkTime = new Date();
    this.newCheckTime = null;
    this.checkType = '';
    this.description = '';
    this.locationLatitude = '';
    this.locationLongitude = '';
    this.locationAddress = '';
    this.isRemoteTimeIn = false;
    this.remarks = '';
    this.checkInRemarks = '';
    this.checkOutRemarks = '';
    this.designation = '';
    this.department = '';
    this.legalEntity = '';
    this.branch = '';
    this.location = '';
    this.employeeNo = 0;
    this.createdOn = new Date();
    this.modifiedOn = new Date();
    this.shiftStartTime = null;
    this.shiftEndTime = null;
    this.shiftHours = null;
    this.breakTime = '';
    this.workingHours = null;
    this.graceTime = null;
    this.checkIn = new Date();
    this.checkOut = new Date();
    this.date = new Date();
    this.timeInOffice = '';
    this.workTime = '';
    this.lateTime = '';
    this.difference = '';
    this.earlyTime = '';
    this.earlyMints = 0;
    this.isLate = false;
    this.isEarly = false;
    this.requiredHours = null;
    this.checkInData = '';
    this.checkOutData = '';
    this.checkInDetails = new mdl_CheckTimeInOut();
    this.checkOutDetails = new mdl_CheckTimeInOut();
    this.deptID = 0;
    this.mainDeptID = 0;
    this.jobTitleID = 0;
    this.workShiftID = 0;
    this.workMints = 0;
    this.deviations = 0;
    this.halfDays = 0;
    this.absents = 0;
    this.informReason = '';
    this.isInformed = false;
    this.informedAddedBy = 0;
    this.overTime = '';
    this.overTimeMints = 0;
    this.checkInFormatted = '';
    this.checkOutFormatted = '';
    this.responseStartDate = new Date();
    this.responseEndDate = new Date();
    this.responseElapsed = '';
    this.dateCreated = new Date();
    this.requiredHoursString = '';
    this.isLoadingCheckIn = false;
    this.isLoadingCheckOut = false;
  }
}
