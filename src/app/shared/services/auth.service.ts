import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ResponseLogin } from '@shared/interfaces/response-login.interface';
import { environment } from '@environments/environment';
import { UserLogin } from '@shared/interfaces/user-login.interface';
import { SessionStorage } from '@shared/enums/session-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService
  ) { }


  private saveTokenInSessionStorage(responseLogin: ResponseLogin): void {
    sessionStorage.setItem(SessionStorage.BearerToken, responseLogin.token);
  }

  public login = (userLogin: UserLogin): Observable<ResponseLogin> =>
    this.http.get(environment.auth, {
      params: { ...userLogin }
    })
      .pipe(
        tap((responseLogin: ResponseLogin) => this.saveTokenInSessionStorage(responseLogin))
      );

}
