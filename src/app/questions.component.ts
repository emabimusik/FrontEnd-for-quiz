import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ApiService} from './api.service';
import{ActivatedRoute} from '@angular/router';

@Component({
    
  selector: 'questions',
  templateUrl: './questions.component.html',
 
})
export class QuestionsComponent {
  questions
  question={}
  constructor(private api : ApiService, private route:ActivatedRoute){}
  

   
   ngOnInit(){
     var quizId = this.route.snapshot.paramMap.get('quizId');
     this.api.getQuestion(quizId).subscribe(res=>{
        this.questions = res;
     });
   }
  
}
