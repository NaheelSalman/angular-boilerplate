/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService
{
  onRouteChange = new Subject<string>();

  constructor() { }

  triggerRouteChange(route: string)
  {
    this.onRouteChange.next(route);
  }
}
