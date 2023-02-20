import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { UserLogin } from 'src/app/interface/UserLogin';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:UserLogin=new UserLogin();
 UserLogin:User=new User();
  constructor(private serv:LoginServiceService) { }

  ngOnInit(): void {
  }
  login(){

    console.log(this.user);
       return this.serv.loginPost(this.user).subscribe((data:any)=>{
        //this.UserLogin=data;
        console.log("data "+data)
       },error=>{
       // x=error;
        console.log("error "+error);
       })
  }

}
