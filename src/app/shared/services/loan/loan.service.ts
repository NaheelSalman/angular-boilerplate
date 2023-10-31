import { Injectable } from '@angular/core';
import { APIClient } from '../apiclient.service';
import { Task } from 'ngx-ui-loader';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService
{

  private apiclient: APIClient;
  constructor(private _apiclient: APIClient)
  {
    this.apiclient = _apiclient;
  }

  getLoanRequests<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('Loan/GetLoanRequests', Data);
  }

  getLoanDetails<Result>(Data: any): Observable<Result>
  {
    return this.apiclient.post('Loan/GetLoanDetails', Data);
  }
  getLoanTypes<Result>(): Observable<Result>
  {
    return this.apiclient.get('Loan/GetLoanTypes');
  }

}
