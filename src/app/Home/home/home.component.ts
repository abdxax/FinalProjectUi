import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient) {

   }
   loginform=this.fb.group({
    email:[''],
    password:['']
  })

  ngOnInit(): void {
  }
  save(){
    var formData: any = new FormData();
    formData.append('email', "");
    formData.append('password', "");
   let res=this.http.post("http://localhost:8080/api/v1/auth/login",formData);

  console.log(res.subscribe(data=>{
    return data;

  }))
  }

}
