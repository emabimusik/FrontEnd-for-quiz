import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import {ApiService} from './api.service';
import {QuestionsComponent}   from'./questions.component';
import {HomeComponent}   from'./home.component';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent } from './register.component';

const routes=[
  {path:'', component:HomeComponent},
  {path:'question/:quizId', component:QuestionComponent},
  {path:'quiz', component:QuizComponent},
  {path:'quizzes', component:QuizzesComponent},
  {path:'question', component:QuestionComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'register', component:RegisterComponent},
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
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
