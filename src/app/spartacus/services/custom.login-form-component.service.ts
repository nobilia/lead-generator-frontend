import {Injectable} from '@angular/core';
import {LoginFormComponentService} from "@spartacus/user/account/components";
import {Guid} from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class CustomLoginFormComponentService extends LoginFormComponentService {

  protected onSuccess(isLoggedIn: boolean) {
    if (isLoggedIn) {
      localStorage.setItem('sessionId', Guid.create().toString());
    }
    super.onSuccess(isLoggedIn);
  }
}
