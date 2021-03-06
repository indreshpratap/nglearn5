import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { pincode, mobile } from "../../shared/custom.validators";
import { AdminService } from "../../shared/admin.service";
declare var jQuery:any; // to get jquery ref object
@Component({
  selector: "app-usr-registration",
  templateUrl: "./usr-registration.component.html",
  styleUrls: ["./usr-registration.component.css"]
})
export class UsrRegistrationComponent implements OnInit {
  regForm: FormGroup;
inprogess=false;
  constructor(private fb: FormBuilder,private adminService:AdminService) {}


loadStudents(){
  console.log("Fetching students");
  this.inprogess = true;
  this.adminService.fetchStudentsAll().subscribe(res=>{
    console.log("Received the data", res.status);
   if(res.data){

   }
  },err=>{},()=>{
    this.inprogess = false;
  })
}

  ngOnInit() {
    this.loadStudents();
    jQuery('body').addClass('added-by-jquery');
    this.regForm = this.fb.group({
      name: ["Indresh", [Validators.required]],
      email: [, [Validators.required, Validators.minLength(5)]],
      phone: [, [mobile]],
      gender: [],
      comm_address: this.fb.group({
        line1: [, [Validators.required]],
        line2: [],
        city: [, [Validators.required]],
        state: [, [Validators.required]],
        pin: [, [Validators.required, pincode]]
      }),
      same_addr: [true]
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

  addAddress() {
    this.regForm.addControl(
      "permanent_address",
      this.fb.group({
        line1: [, [Validators.required]],
        line2: [],
        city: [, [Validators.required]],
        state: [, [Validators.required]],
        pin: [, [Validators.required, pincode]]
      })
    );
  }

  removeAddress() {
    this.regForm.removeControl("permanent_address");
  }
  toggleAddr() {
    if (this.regForm.value.same_addr) {
      this.removeAddress();
    } else {
      this.addAddress();
    }
  }

  setValue() {
    this.regForm.setValue({
      name: "fdsf",
      email: "fdsfsfdf",
      phone: "999999999",
      gender: "Male",
      comm_address: {
        line1: "fsdfsd",
        line2: "dfs",
        city: "",
        state: "",
        pin: ""
      },
      same_addr: true
    });
  }
  patchValue(){
    this.regForm.patchValue({
      phone:"9953093009",
      name:"Indresh "
    });
  }


  save(){
    if(this.regForm.valid){
      this.adminService.registerStudent(this.regForm.value).subscribe(res=>console.log(res));
    }
  }
}
