import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template:`
  <mat-toolbar color="primary" >
    <button mat-raised-button routerLink ="">Quiz</button>
    <button mat-raised-button routerLink ="/question">Question </button>
    <span style ="flex:1 1 auto;"></span>
    <button mat-raised-button routerLink ="/register">Register</button>
  </mat-toolbar>`
 
})
export class NavComponent {

  
}
