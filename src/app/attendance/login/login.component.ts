import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string="demo";
  password:string;

  doLogin(loginform){
    // console.log(this.username,this.password);
    // console.log(loginform);
    console.log(loginform.value);
  }

}
