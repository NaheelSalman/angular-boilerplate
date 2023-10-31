import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../models/user-info.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;
  private router:Router;
  constructor(private _router: Router) {
    const userJson = localStorage.getItem('UserInfo');
    this.currentUserSubject = new BehaviorSubject<UserInfo>(userJson !==null ? JSON.parse(userJson): new UserInfo());
    this.currentUser = this.currentUserSubject.asObservable();
    this.router = _router;
  }
  public get getCurrentUserValue(): UserInfo {
    return this.currentUserSubject.value;
  }
  setCurrentSubject(user: any) {
    this.currentUserSubject.next(user);
  }
}
