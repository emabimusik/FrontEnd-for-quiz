import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ApiService} from './api.service';
@Component({
    
  selector: 'question',
  templateUrl: './question.component.html',
 
})
export class QuestionComponent {
  question={}
  constructor(private api : ApiService){

  }
  post(question){
   this.api.postQuestion(question);
  }
  
}
