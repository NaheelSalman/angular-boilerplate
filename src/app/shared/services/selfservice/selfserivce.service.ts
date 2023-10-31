import { Injectable } from '@angular/core';
import { APIClient } from '../apiclient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfSerivce
{
  private apiclient: APIClient;
  constructor(private _apiclient: APIClient)
  {
    this.apiclient = _apiclient;
  }
  //#region Time Change Requests
  public getChangeTimeRequests<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('Attendance/GetAttendanceRequests', Data);
  }
  public addUpdateAttendanceRequest<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/AddUpdateAttendanceRequest', Data);
  }
  //#endregion
  //#region Leave Requests
  public calculateLeaveDays<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/CalculateLeaveDays', Data);
  }
  public addUpdateLeavesRequest<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/AddUpdateLeavesRequest', Data);
  }
  //#endregion
  //#region OverTime Requests
  public addUpdateOvertimeRequest<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/AddUpdateOvetimeRequest', Data);
  }
  public getOverTimeRequest<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/GetOverTimeRequest', Data);
  }
  //#endregion
  //#region Loan Requests
  public addUpdateLoanRequest<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('SelfService/AddUpdateLoanRequest', Data);
  }
  //#endregion
}
