import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'Bearer '.concat(sessionStorage.getItem(RestEndpointConstants.USER_TOKEN) || '')
    })
  };

  constructor(private http: HttpClient) { }

  public getAnnouncements(): Observable<any> {
    return this.http.get(environment.backendUrl.concat(RestEndpointConstants.ANNOUNCEMENTS_ENDPOINT), this.httpOptions);
  }
}
