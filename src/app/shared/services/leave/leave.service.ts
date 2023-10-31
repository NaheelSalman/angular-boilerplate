import { Injectable } from '@angular/core';
import { APIClient } from '../apiclient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private apiclient: APIClient;
  constructor(private _apiclient: APIClient)
  {
    this.apiclient = _apiclient;
  }
  getLeaverRequests<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('Leave/GetLeaverRequests', Data);
  }
}
