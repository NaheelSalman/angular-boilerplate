import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient } from '../apiclient.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService
{

  private apiclient: APIClient;
  constructor(private _apiclient: APIClient)
  {
    this.apiclient = _apiclient;
  }
  public getLastCheckTime<Result>(userID: number): Observable<Result>
  {
    const parameters: { [key: string]: string; } =
    {
      userID: userID.toString()
    };
    return this.apiclient.get('Attendance/GetLastCheckTime', parameters);
  }

  public getAttendance<Result>(data: any): Observable<Result>
  {
    return this.apiclient.post('Attendance/GetAttendance', data);
  }

  public getTodayAttendance<Result>(data: any): Observable<Result>
  {
    return this.apiclient.post('Attendance/GetTodayAttendance', data);
  }
  public getHolidayDetails<Result>(data: any): Observable<Result>
  {
    return this.apiclient.post('Attendance/GetHolidayDetails', data);
  }
  public addAttendance<Result>(data: any): Observable<Result>
  {
    return this.apiclient.post('Attendance/AddAttendance', data);
  }
  public getMonthlyAttendance<Result> (data: any):Observable<Result>
  {
    return this.apiclient.post('Attendance/GetMonthlyAttendance', data);
  }



}
