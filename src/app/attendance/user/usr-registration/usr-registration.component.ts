import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usr-registration',
  templateUrl: './usr-registration.component.html',
  styleUrls: ['./usr-registration.component.css']
})
export class UsrRegistrationComponent implements OnInit {

  regForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.regForm = new FormGroup({
      "name":new FormControl("Indresh",Validators.required),
      "email":new FormControl(null,[Validators.required,Validators.minLength(5)]),
      "phone":new FormControl(),
      "gender":new FormControl()
    });

    
  }

}
