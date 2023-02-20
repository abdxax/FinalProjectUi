import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User';
import { UserLogin } from '../interface/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  loginPost(user:UserLogin):Observable<Object>{
     const header=new Headers({Authorization:"Basic "+btoa(user.email+":"+user.password)})
    return this.http.post<any>("http://localhost:8080/login",{header});
  }
}
