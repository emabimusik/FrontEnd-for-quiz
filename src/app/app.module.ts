import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {AuthInterceptor } from './auth.interceptor'
import {QuestionsComponent}   from'./questions.component';
import {HomeComponent}   from'./home.component';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent } from './register.component';
import {LoginComponent} from './login.component'; 
import {PlayComponent} from './play.component';
import {PlayQuizComponent} from './playquiz.component';
import {FinishedComponent} from './finished.component';
const routes=[
  {path:'', component:HomeComponent},
  {path:'question/:quizId', component:QuestionComponent},
  {path:'quiz', component:QuizComponent},
  {path:'quizzes', component:QuizzesComponent},
  {path:'question', component:QuestionComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'play',component:PlayComponent},
  {path:'playQuiz/:quizId',component:PlayQuizComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    FormsModule ,
    ReactiveFormsModule ,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [ApiService,AuthService,{
  provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true

  }],
  bootstrap: [AppComponent],
  entryComponents:[FinishedComponent]
})
export class AppModule { }
