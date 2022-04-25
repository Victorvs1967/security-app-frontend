import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionAndAnswerComponent } from './component/question-and-answer/question-and-answer.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  { path: 'questionsAndAnswers', component: QuestionAndAnswerComponent },
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
