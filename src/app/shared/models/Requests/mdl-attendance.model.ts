export class mdl_Attendance {
  public id: number;
  public userID: number;
  public organizationID: number;
  public checkTime: Date;
  public checkType: string;
  public latitude: string;
  public longitude: string;
  public locationAddress: string;
  public isRemoteTimeIn: boolean;
  public remarks: string;
  public addedBy: number;
  public isManual: boolean;
  public isLastEntryOfDay: boolean;

  constructor() {
    this.id = 0;
    this.userID = 0;
    this.organizationID = 0;
    this.checkTime = new Date();
    this.checkType = "";
    this.latitude = "";
    this.longitude = "";
    this.locationAddress = "";
    this.isRemoteTimeIn = false;
    this.remarks = "";
    this.addedBy = 0;
    this.isManual = false;
    this.isLastEntryOfDay = false;
  }
}
