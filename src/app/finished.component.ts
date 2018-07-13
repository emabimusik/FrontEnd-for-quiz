import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  
  template: `<h2>Your score</h2><h3>{{data.correct}}/{{data.total}}</h3>
  `,
 
})
export class FinishedComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data){

  }
}
