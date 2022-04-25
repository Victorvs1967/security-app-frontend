import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly USER_NAME: string = 'sessionUser';

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    const headers = new HttpHeaders( (username && password) ?{ authorization: 'Basic'.concat(username).concat(':'.concat(password)) } : { });

    this.http.get(environment.backendUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), { headers: headers })
      .subscribe((response: any) => sessionStorage.setItem(this.USER_NAME, response.username));
  }

  public logout() {
    sessionStorage.removeItem(this.USER_NAME);
  }

  public isUserAuthenticated() {
    return sessionStorage.getItem(this.USER_NAME) ? true : false;
  }
}
