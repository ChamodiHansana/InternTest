import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";


  constructor(private http:HttpClient) { }



  getCusList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/customer/');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl + '/customer/',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl + '/customer/',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl + '/customer/'+val);
  }

  


}
