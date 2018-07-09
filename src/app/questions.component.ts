import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ApiService} from './api.service';
@Component({
    
  selector: 'questions',
  templateUrl: './questions.component.html',
 
})
export class QuestionsComponent {
  questions
  question={}
  constructor(private api : ApiService){}

   ngOnInit(){
     this.api.getQuestion().subscribe(res=>{
        this.questions = res;
     });
   }
  
}
