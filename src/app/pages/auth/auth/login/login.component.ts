// Angular modules
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastManager } from '@blocks/toast/toast.manager';
import { Endpoint } from '@enums/endpoint.enum';

// Internal modules
import { environment } from '@env/environment';
import { StorageHelper } from '@helpers/storage.helper';
import { mdl_Authenticate } from '@models/Requests/mdl-authenticate.model';
import { Result, responseCodeEnum } from '@models/result.model';
import { UserInfo } from '@models/user-info.model';

// Services
import { AppService } from '@services/app.service';
import { AuthenticateService } from '@services/authenticate.service';
import { StoreService } from '@services/store.service';
import { UserInfoService } from '@services/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(
    private router: Router,
    private toastManager: ToastManager,
    private storeService: StoreService,
    private userInfoService: UserInfoService,
    private appService: AuthenticateService
  ) {
    this.initFormGroup();
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }
      ),
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit(): Promise<void> {
    await this.authenticate();
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async authenticate(): Promise<boolean> {
    StorageHelper.removeToken();
    this.storeService.setIsLoading(true);
    this.formGroup.controls.username.getRawValue();
    this.formGroup.controls.password.getRawValue();
    const data: Partial<mdl_Authenticate> = {
      userName: this.formGroup.controls.username.getRawValue(),
      password: this.formGroup.controls.password.getRawValue(),
      fcmID: '',
      deviceID: '',
      deviceInfo: '',
    };

    // const success  = await this.appService.authenticate(username, password);
    const success = this.appService.login<Result>(data).subscribe((result) => {
      if (result.responseCode === responseCodeEnum.ok) {
        var user = <UserInfo>result.data;
        if (user.token !== '' && user.token !== null) {
          const existingUser = StorageHelper.getItem('UserInfo');
          if (existingUser !== null) {
            const apiURL = JSON.parse(existingUser!);
            user.apiUrl = apiURL.apiUrl;
          }
          StorageHelper.setItem('UserInfo', JSON.stringify(user));
          StorageHelper.setToken(user);
          this.userInfoService.setCurrentSubject(user);
          this.storeService.setIsLoading(false);
          this.toastManager.quickShow(result.message,'success',true);
          this.router.navigate(['/home']);
          return true;
        } else {
          this.storeService.setIsLoading(false);
          this.toastManager.quickShow(result.message);
          return false;
        }
      } else {
        this.storeService.setIsLoading(false);
        console.log(result);
        console.log(result.responseCode);
        console.log(result.message);
        console.log(result.data);
        this.toastManager.quickShow(result.message);
        return false;
      }
    });
    return false;
  }

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------
}
