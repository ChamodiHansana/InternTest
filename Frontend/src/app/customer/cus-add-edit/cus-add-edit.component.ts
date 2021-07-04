import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-cus-add-edit',
  templateUrl: './cus-add-edit.component.html',
  styleUrls: ['./cus-add-edit.component.scss']
})

export class CusAddEditComponent implements OnInit {

  constructor(private service:SharedService,) { }

  @Input() cus:any;


   CustomerId!:"";
   CustomerName!:"";
   Telephone!:"";
  
 


  ngOnInit(): void {
    this.CustomerId=this.cus.CustomerId;
    this.CustomerName=this.cus.CustomerName;
    this.Telephone=this.cus.Telephone;
  }
  
  
  addCustomer(){
    var val = {CustomerId:this.CustomerId,
               CustomerName:this.CustomerName,
               Telephone:this.Telephone};
    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
     
    });
  }

  updateCustomer(){
    var val = {CustomerId:this.CustomerId,
      CustomerName:this.CustomerName,
      Telephone:this.Telephone};
    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    
    });
  }


}
