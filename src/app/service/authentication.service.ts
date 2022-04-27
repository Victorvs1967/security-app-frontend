import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';
import { TokenResponse } from '../model/token-response.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  public signUp(user: User): Observable<User> {
    return this.http.post<User>(environment.backendUrl.concat(RestEndpointConstants.SIGNUP_ENDPOINT), user);
  }

  public login(username: string, password: string): Observable<TokenResponse> {
    const user = new User();
    user.username = username;
    user.password = password
    return this.http.post<TokenResponse>(environment.backendUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), user)
      .pipe(map((token: any) => {
        sessionStorage.clear();
        this.loggedIn.next(true);
        sessionStorage.setItem(RestEndpointConstants.USER_TOKEN, token)
        setTimeout(() => {}, 500);
        return token;
      }));
  }

  public logout() {
    this.loggedIn.next(false);
    sessionStorage.clear();
    setTimeout(() => { }, 500);
  }
}
