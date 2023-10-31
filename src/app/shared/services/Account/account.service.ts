import { Injectable } from '@angular/core';
import { APIClient } from '../apiclient.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiclient :APIClient;
  constructor(private _apiclient :APIClient) {
    this.apiclient = _apiclient;
  }

  AuthenticateOrganization<Result>(Data: any):Observable<Result> {
    return this.apiclient.post('Illustration/AuthenticateOrganizationCode', Data ,null,true);
  }
}
