import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'nav',
  template:`
  <mat-toolbar color="primary" >
    <button mat-raised-button routerLink ="">Quiz</button>
    <button mat-raised-button routerLink ="/question">Question </button>
    <span style ="flex:1 1 auto;"></span>
    
    <button *ngIf="!auth.isAuthenticated" mat-raised-button routerLink ="/register">Register</button>
    <button *ngIf="!auth.isAuthenticated" mat-raised-button routerLink ="/login">Login</button>
    <button *ngIf="auth.isAuthenticated"(click)="auth.logOut()"mat-raised-button >Logout</button>
  </mat-toolbar>`
 
})
export class NavComponent {
 
  constructor ( private auth :AuthService){

  }
  
}
