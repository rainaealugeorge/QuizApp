import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizsComponent } from './quizs.component';
import { QuizComponent } from './quiz.component';
import { LoginComponent } from './login.component';
import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question.component';
import { PlayComponent } from './play.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'quizs', component:QuizsComponent},
  {path:'quiz', component:QuizComponent},
  {path:'question', component:QuestionComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'play', component:PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
