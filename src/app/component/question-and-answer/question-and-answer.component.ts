import { Component, OnInit } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/model/question-and-answer.model';
import { QuestionAndAnswerService } from 'src/app/service/question-and-answer.service';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  questionsAndAnswers: QuestionAndAnswer[] = [];

  constructor(private questionAndAnswerService: QuestionAndAnswerService) { }

  ngOnInit(): void {
    this.questionAndAnswerService
      .getQuestionAndAnswers()
      .subscribe(data => this.questionsAndAnswers = data);
  }

}
