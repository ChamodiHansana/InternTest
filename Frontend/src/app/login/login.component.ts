import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user:any;
 
  form!: FormGroup;
  
  private formSubmitAttempt!: boolean;
  public ActivateAddEditCusComp:boolean=false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private service:SharedService
   
  ) {}

  
  ngOnInit() {
   
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
      
      
    });
  }
  addClick(){
    
    this.user={
      UserId:0,
      UserName:"",  
      UserType:"",
      Password:""
    }
    this.ActivateAddEditCusComp=true;

  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)!.valid && this.form.get(field)!.touched) ||
      (this.form.get(field)!.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  
  
}
