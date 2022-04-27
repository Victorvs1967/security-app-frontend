import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'Bearer '.concat(sessionStorage.getItem(RestEndpointConstants.USER_TOKEN) || '')
    })
  };

  public getUser(): Observable<User> {
    return this.http.get(environment.backendUrl.concat(RestEndpointConstants.USER_ENDPOINT), this.httpOptions);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.backendUrl.concat(RestEndpointConstants.USERS_ENDPOINT), this.httpOptions);
  }
}
