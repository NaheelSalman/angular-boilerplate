import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info.model';
import {BehaviorSubject ,Observable, of, throwError} from 'rxjs';
import { APIClient } from './apiclient.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInfoService } from './user-info.service';
import { Endpoint } from '@enums/endpoint.enum';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private apiclient :APIClient;
  private userInfo:UserInfoService;
  private router:Router;
  constructor(private _apiclient :APIClient,private _router: Router,private _userInfo : UserInfoService) {
    this.apiclient = _apiclient;
    this.router = _router;
    this.userInfo=_userInfo;
  }

  login<Result>(formData: any):Observable<Result> {
    return this.apiclient.post(Endpoint.AUTHENTICATE, formData);
  }


  async logout() :Promise<boolean> {
    // remove user from local storage to log user out
    const users:UserInfo= new UserInfo();
    const existingUser=this.userInfo.getCurrentUserValue;
    users.apiUrl= existingUser.apiUrl;
    this.userInfo.setCurrentSubject(users);
    localStorage.setItem('UserInfo',JSON.stringify(users));
    this.router.navigate(['./login']);
    return true;
    }
}
