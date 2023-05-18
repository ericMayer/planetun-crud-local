import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpService } from '@shared/services/http.service';
import { ResponseLogin } from '@shared/interfaces/response-login.interface';
import { environment } from '@environments/environment';
import { UserLogin } from '@shared/interfaces/user-login.interface';
import { SessionStorage } from '@shared/enums/session-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userName: string;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }


  private saveInfoUser(responseLogin: ResponseLogin, userName: string): void {
    this.userName = userName;
    sessionStorage.setItem(SessionStorage.BearerToken, responseLogin.token);
  }

  public login = (userLogin: UserLogin): Observable<ResponseLogin> =>
    this.http.get(`${environment.auth}`, {
      params: { ...userLogin }
    })
      .pipe(
        tap((responseLogin: ResponseLogin) => this.saveInfoUser(responseLogin, userLogin?.name))
      );

  public logout(): void {
    this.userName = null;
    localStorage.removeItem(SessionStorage.BearerToken);
    this.router.navigateByUrl('login');
  }
}
