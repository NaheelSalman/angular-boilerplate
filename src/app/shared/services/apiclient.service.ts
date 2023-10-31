import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, } from '@angular/common/http';
import { Observable, catchError, map, of, retry, throwError } from 'rxjs';
import { Result } from '../models/result.model';
import { error } from 'console';
import { UserInfo } from '../models/user-info.model';
import { AuthenticateService } from '../services/authenticate.service';
import { mdl_Refresh } from '../models/Requests/mdl-authenticate.model';
import { UserInfoService } from './user-info.service';
import { environment } from 'src/environments/environment';
import { userInfo } from 'os';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class APIClient
{
  //const apiUrlFromServer : string| null = null;
  private apiUrl: string | null = environment.apiBaseUrl;
  private refreshTokenRetries: number = 0;

  // private apiUrl: string = 'https://dev-erpapi.radiantworkforce.com/api'; // Replace with your API URL
  private baseAdminUrl: string = environment.apiBaseUrl;
  //Testing Scenerio Variable
  // private baseAdminUrl: string = 'https://dev-erpapi.radiantworkforce.com/api';
  private userInfoService: UserInfoService;

  constructor(private router: Router, private http: HttpClient, private _userInfoService: UserInfoService)
  {
    this.userInfoService = this._userInfoService;
  }

  public setUrl(newUrl: any): void
  {
    environment.apiBaseUrl = newUrl;
    const userInfo = this.userInfoService.getCurrentUserValue;
    userInfo.apiUrl = newUrl;
    this.userInfoService.setCurrentSubject(userInfo);
    localStorage.setItem('UserInfo', JSON.stringify(userInfo));
  }

  public get<Result>(method: string, params?: any): Observable<Result>
  {
    const userInfo = this.userInfoService.getCurrentUserValue;
    if (userInfo.apiUrl !== null)
    {
      this.apiUrl = userInfo.apiUrl;
    }
    const url = `${this.apiUrl + method}`;
    const headers = this.createHeaders();
    return this.http
      .get<Result>(url, { headers, params })
      .pipe(
        retry(0),
        catchError((e) => this.handleErrorWithRefreshingToken(e, method, null, params, false)));
  }

  public post<Result>(method: string, json: string | any, parameters: { [key: string]: string; } | null = null, isAdmin: boolean = false): Observable<Result>
  {
    // Pipe ka usage is method me writeen hai neechay

    const userInfo = this.userInfoService.getCurrentUserValue;
    if (userInfo.apiUrl !== null)
    {
      this.apiUrl = userInfo.apiUrl;
    }
    const url = `${isAdmin ? this.baseAdminUrl + method : this.apiUrl + method}`;
    if (parameters !== null)
    {
      if (Object.keys(parameters).length > 0)
      {
        let url = '?';
        for (let key in parameters)
        {
          url += key + '=' + parameters[key] + '&';
        }
      }
    }
    const headers = this.createHeaders();
    return this.http
      .post<Result>(url, JSON.stringify(json), { headers })
      .pipe(
        retry(0),
        catchError((e) => this.handleErrorWithRefreshingToken(e, method, json, parameters, isAdmin))
      );
  }

  // Handle API errors
  handleErrorWithRefreshingToken(
    error: HttpErrorResponse,
    method: string,
    json: string | null = null,
    parameters: { [key: string]: string; } | null = null,
    isAdmin: boolean = false
  )
  {
    if (error.error instanceof ErrorEvent)
    {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status === 401)
      {
        let isTokenRefreshed = false;
        console.log('yahan pr akar ruk raha hai', isTokenRefreshed);
        this.refreshToken().subscribe(data =>
        {
          console.log('Refresh Token Call huwa hai ab ');
          if (this.refreshTokenRetries > 2)
          {
            this.router.navigate(['./login']);
          }
          if (data === true)
          {
            console.log('yahan tk execute huwa', isTokenRefreshed);
            isTokenRefreshed = true;
            return isTokenRefreshed;
          }
          console.log('execute nahi huwa', isTokenRefreshed);
          this.refreshTokenRetries++;
          return isTokenRefreshed;
        });
        if (isTokenRefreshed)
        {
          console.log('execute nahi huwa', isTokenRefreshed);
          this.post<Result>(method, json, parameters, isAdmin);
        }
      }
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}` +
        `body was: ${error.headers}`
      );
    }

    return throwError(error);
  }

  private createHeaders(): HttpHeaders
  {
    const userInfo = this.userInfoService.getCurrentUserValue;
    if (userInfo.token !== '' && userInfo.token !== null)
    {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo === null ? '' : userInfo.token}`, });
      return headers;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json','accept': '*/*' });
    return headers;
  }

  public refreshToken(): Observable<boolean>
  {
    const userInfo = this.userInfoService.getCurrentUserValue;
    if (userInfo !== null && userInfo.id > 0)
    {
      const method = 'Account/RefreshToken';
      const url = `${this.apiUrl}/${method}`;
      const data: mdl_Refresh = new mdl_Refresh();
      data.refreshToken = userInfo.refreshToken!;
      // data.uniqueID = userInfo.uniqueID!;
      data.uniqueID = '';
      console.log('RefreshToke ka data:', data, '\n ApiToken:', userInfo.token);
      return this.post<Result>(method, data, null, false).pipe(
        catchError((error) =>
        {
          // Handle error if needed
          return throwError(() => error);
        }),
        map((response) =>
        {
          console.log('Refresh Token Line 203');
          console.log(response);
          const userJson = JSON.stringify(response.data);
          const user = <UserInfo>JSON.parse(userJson);
          // const user = response.data;
          console.log('Refresh Token Line 205', user);
          if (user && user.token)
          {
            userInfo.refreshToken = user.refreshToken;
            userInfo.token = user.token;
            this.userInfoService.setCurrentSubject(userInfo);
            localStorage.setItem('UserInfo', JSON.stringify(userInfo));
            console.log('user null nahi hai aisa lagta hai', user);
            return true;
          }
          else
          {
            console.log('user null hai ', user);
            return false;
          }
        }
        )
      );
    }
    else
    {
      return of(false);
    }
  }
}
