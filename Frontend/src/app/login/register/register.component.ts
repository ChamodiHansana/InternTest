import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
  constructor( private service:SharedService) { }
  @Input() user:any;


  UserId!:"";
  UserName!:"";    
  UserType!:"";
  Password!:"";

  
ngOnInit(): void {
    this.UserId=this.user.UserId;
    this.UserName=this.user.UserName;
    this.UserType=this.user.UserType;
    this.Password=this.user.Password;
  }
  
  
  

  registerNewUser(){
    var val = {UserId:this.UserId,
               UserName:this.UserName,
               UserType:this.UserType,
               Password:this.Password};
    this.service.registerNewUser(val).subscribe(res=>{
      alert(res.toString());
     
    });
  }
}
