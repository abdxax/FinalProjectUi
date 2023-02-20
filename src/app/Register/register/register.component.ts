import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User=new User;
  constructor(private register:RegisterServiceService) { }

  ngOnInit(): void {
  }

  save(){
   console.log(this.user)
   this.register.register(this.user).subscribe(data=>{
    console.log(data);
    alert("done");

   },error=>{
    console.log(error)
    alert("error")
   })
  }

}
