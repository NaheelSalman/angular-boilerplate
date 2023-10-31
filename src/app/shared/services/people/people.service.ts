import { Injectable } from '@angular/core';
import { APIClient } from '../apiclient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService
{
  private apiclient: APIClient;
  constructor(private _apiclient: APIClient)
  {
    this.apiclient = _apiclient;
  }
  getEmployees<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('People/GetEmployees', Data);
  }
  getEmployeeLeaves<Result>(employeeID: number): Observable<Result>
  {
    // const parameters: { [key: string]: string; } =
    // {
    //   employeeID: employeeID.toString()
    // };
    return this.apiclient.get(`People/GetEmployeeLeaves/${employeeID}`);
  }
}
