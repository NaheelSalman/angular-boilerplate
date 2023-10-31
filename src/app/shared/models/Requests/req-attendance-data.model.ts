export class req_AttendanceData {
  public id: number = 0;
  public userId: number = 0;
  public accountId: number = 0;
  public organizationId: number = 0;
  public legalEntityId: number = 0;
  public branchId: number = 0;
  public locationId: number = 0;

  public legalEntityIds: string = '';
  public branchIds: string = '';
  public locationIds: string = '';
  public employeeIds: string = '';
  public employeeId: number = 0;
  public selectedEmployeeId: number = 0;
  public date: Date = new Date();
  public fromDate: Date = new Date();
  public toDate: Date = new Date();

  public pageId: number = 0;
  public month: number = 0;
  public year: number = 0;
  public lastFetchDate: Date | null = null;
  public lastFetchedStartDate: Date | null = null;
  public lastFetchedEndDate: Date | null = null;

  constructor() {
    // Constructor with default values
  }
}
