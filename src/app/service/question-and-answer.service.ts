import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestEndpointConstants } from '../config/rest-endpoint-constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionAndAnswerService {

  constructor(private http: HttpClient) { }

  public getQuestionAndAnswers(): Observable<any> {
    return this.http.get(environment.backendUrl.concat(RestEndpointConstants.QUESTION_AND_ANSWER_ENDPOINT), { observe: 'body', responseType: 'json' });
  }
}
