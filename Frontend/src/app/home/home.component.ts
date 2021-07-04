import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
 
})


export class HomeComponent implements OnInit {

constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle!:string;
  public ActivateAddEditCusComp:boolean=false;
  cus:any;

  CustomerIdFilter:string="";
  CustomerNameFilter:string="";
  CustomerListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCusList();
  }

  addClick(){
    this.cus={
      CustomerId:0,
      CustomerName:"",
      Telephone:""

    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCusComp=true;

  }

  editClick(item:any){
    this.cus=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCusComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item.CustomerId).subscribe(data=>{
        alert(data.toString());
        this.refreshCusList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCusComp=false;
    this.refreshCusList();
  }


  refreshCusList(){
    this.service.getCusList().subscribe(data=>{
      this.CustomerList=data;
      this.CustomerListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CustomerIdFilter = this.CustomerIdFilter;
    var CustomerNameFilter = this.CustomerNameFilter;

    this.CustomerList = this.CustomerListWithoutFilter.filter(function (el:any){
        return el.CustomerId.toString().toLowerCase().includes(
          CustomerIdFilter.toString().trim().toLowerCase()
        )&&
        el.CustomerName.toString().toLowerCase().includes(
          CustomerNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CustomerList = this.CustomerListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
