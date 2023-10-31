import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StoreService } from '@services/store.service';
import { ToastManager } from '@blocks/toast/toast.manager';
import { catchError, finalize, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private storeService: StoreService,
    private toastManager: ToastManager
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.storeService.setIsLoading(true);
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.storeService.setIsLoading(false); // Hide loader when a response is received.
        }
      }),
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          //this.authenticationService.logout();
          //location.reload(true);
        }

        const error = err.error.message || err.statusText;
        this.storeService.setIsLoading(false);
        this.toastManager.quickShow(error);
        return throwError(error);
      }),
      finalize(() => {
        this.storeService.setIsLoading(false); // Make sure the loader is hidden in all cases.
      })
    );
  }
}
