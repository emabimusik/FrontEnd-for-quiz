import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { AuthService } from './auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  templateUrl: './login.component.html',

})
export class LoginComponent {
  form;
  constructor(private auth: AuthService, private fb: FormBuilder) { 
    this.form = fb.group({
        email:['',Validators.required],
        password:['', Validators.required]

        
    })
  }

  

}
