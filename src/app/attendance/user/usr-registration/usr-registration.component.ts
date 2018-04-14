import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { pincode } from "../../shared/custom.validators";

@Component({
  selector: "app-usr-registration",
  templateUrl: "./usr-registration.component.html",
  styleUrls: ["./usr-registration.component.css"]
})
export class UsrRegistrationComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ["Indresh", [Validators.required]],
      email: [, [Validators.required, Validators.minLength(5)]],
      phone: [],
      gender: [],
      comm_address: this.fb.group({
        line1: [, [Validators.required]],
        line2: [],
        city: [, [Validators.required]],
        state: [, [Validators.required]],
        pin: [, [Validators.required, pincode]]
      }),
      permanent_address: this.fb.group({
        line1: [, [Validators.required]],
        line2: [],
        city: [, [Validators.required]],
        state: [, [Validators.required]],
        pin: [, [Validators.required, pincode]]
      })
    });
    /*
    this.regForm = new FormGroup({
      "name":new FormControl("Indresh",[Validators.required]),
      "email":new FormControl(null,[Validators.required,Validators.minLength(5)]),
      "phone":new FormControl(),
      "gender":new FormControl(),
      "comm_address":new FormGroup({
        "line1":new FormControl(null,[Validators.required]),
        "line2":new FormControl(),
        "city":new FormControl(null,[Validators.required]),
        "state":new FormControl(null,[Validators.required]),
        "pin":new FormControl(null,[Validators.required]),
      }),
      "permanent_address":new FormGroup({
        "line1":new FormControl(null,[Validators.required]),
        "line2":new FormControl(),
        "city":new FormControl(null,[Validators.required]),
        "state":new FormControl(null,[Validators.required]),
        "pin":new FormControl(null,[Validators.required]),
      })

    });
    */
  }
}
