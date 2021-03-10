import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from './api.service'
import { LoginService } from './login.service'
import{ QuestionsComponent } from './questions.component'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home.component'
import { QuizComponent } from './quiz.component'
import { QuizsComponent } from './quizs.component'
import { LoginComponent } from './login.component';
import { NavComponent } from './nav.component'
import { PlayComponent } from './play.component'
import { PlayQuizComponent } from './playquiz.component'
import { FinishedComponent } from './finished.component'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'login', component: LoginComponent},
  { path: 'play', component: PlayComponent},
  { path: 'playQuiz/:quizId', component: PlayQuizComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionsComponent, 
    HomeComponent, 
    QuizComponent,
    QuizsComponent, 
    LoginComponent, 
    NavComponent, 
    PlayComponent, 
    PlayQuizComponent, 
    FinishedComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, MatInputModule, MatCardModule, FormsModule, MatListModule, MatToolbarModule,
    MatExpansionModule, MatRadioModule, MatDialogModule
  ],
  providers: [ApiService, LoginService],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
