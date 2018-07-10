import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template:`
  <mat-toolbar>
    <button mat-raised-button routerLink ="/">Home</button>
    <button mat-raised-button routerLink ="/question">Question </button>
    <button mat-raised-button routerLink ="/questions">Questions</button>
  </mat-toolbar>`
 
})
export class NavComponent {

  
}
