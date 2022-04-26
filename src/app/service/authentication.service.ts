import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';
import { TokenResponse } from '../model/token-response.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public signUp(user: User): Observable<User> {
    return this.http.post<User>(environment.backendUrl.concat(RestEndpointConstants.SIGNUP_ENDPOINT), user);
  }

  public login(username: string, password: string): Observable<TokenResponse> {
    console.log(RestEndpointConstants.USER_TOKEN);
    const user = new User();
    user.username = username;
    user.password = password
    return this.http.post<TokenResponse>(environment.backendUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), user)
      .pipe(map((token: any) => {
        sessionStorage.clear();
        sessionStorage.setItem(RestEndpointConstants.USER_TOKEN, token)
        return token;
      }));
  }

  public logout() {
    sessionStorage.clear();
  }

  public isUserAuthenticated(): boolean {
    return sessionStorage.getItem(RestEndpointConstants.USER_TOKEN) ? true : false;
  }
}
