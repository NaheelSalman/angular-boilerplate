export class mdl_AttendanceOverviewParams
{
  public date: Date;
  public legalEntityIds: string;
  public branchIds: string;
  public locationIds: string;
  public organizationId: number;
  constructor()
  {
    this.date = new Date();
    this.legalEntityIds = '';
    this.branchIds = '';
    this.locationIds = '';
    this.organizationId = 0;
  }
}
export class mdl_HolidayDetails
{
  public upcomingHolidayJson!: string;
  public previousHolidayJson!: string;
  public upcomingHoliday!: mdl_Holidays;
  public previousHoliday!: mdl_Holidays;
  constructor()
  {
     this.upcomingHolidayJson= '';
   this.previousHolidayJson= '';
   this.upcomingHoliday=new mdl_Holidays();
   this.previousHoliday= new mdl_Holidays();
  }
}

export class mdl_Holidays
{
  public id: number;
  public name: string;
  public year: number;
  public month: number;
  public day: number;
  public startDate: Date;
  public duration: number;
  public isRepeatAnnually: boolean;
  public isActive: boolean;
  public organizationID: number;
  public imagePath: string;
  public mainDepartmentID: number;
  public subDeparmtentID: number;
  public jobTitleID: number;
  public dateCreated: Date;
  public createdBy: number;
  public dateModified: Date;
  public modifiedBy: number;
  public departmentName: string;

  constructor()
  {
    this.id = 0;
    this.name = '';
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.startDate = new Date();
    this.duration = 0;
    this.isRepeatAnnually = false;
    this.isActive = false;
    this.organizationID = 0;
    this.imagePath = '';
    this.mainDepartmentID = 0;
    this.subDeparmtentID = 0;
    this.jobTitleID = 0;
    this.dateCreated = new Date();
    this.createdBy = 0;
    this.dateModified = new Date();
    this.modifiedBy = 0;
    this.departmentName = '';
  }
}
