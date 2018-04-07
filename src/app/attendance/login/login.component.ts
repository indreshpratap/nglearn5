import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string="demo";
  password:string;

  //Dependency Injection
  constructor(private router:Router){}

  doLogin(loginform){
    // console.log(this.username,this.password);
    // console.log(loginform);
    console.log(loginform.value);
    this.router.navigate(["user-dashboard"]);
  }

}

