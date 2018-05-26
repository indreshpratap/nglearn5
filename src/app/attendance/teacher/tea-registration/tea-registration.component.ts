import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tea-registration",
  templateUrl: "./tea-registration.component.html",
  styleUrls: ["./tea-registration.component.css"]
})
export class TeaRegistrationComponent implements OnInit {
  form: FormGroup;
  image;

  items=[];
  constructor(private fb: FormBuilder,private route:ActivatedRoute) {
    this.items=[
      {label:'fdsfsf',id:1},
      {label:'fdsfsf',id:12},
      {label:'fdsfsf',id:13},
      {label:'fdsfsf',id:14},
      {label:'fdsfsf',id:15},
      {label:'fdsfsf',id:16},
    ]
  }

  ngOnInit() {
    console.log(this.route.snapshot.data);


    this.form = this.fb.group({
      teacherName: [],
      phone: [],
      email: [],
      experiance: this.fb.array([])
    });
    this.addExperiance(); //add first row
  }

  get expFormArray() {
    return this.form.get("experiance") as FormArray;
  }
  addExperiance() {
    this.expFormArray.push(
      this.fb.group({
        subject: [, [Validators.required]],
        year: [],
        month: []
      })
    );
  }

  removeExp(index) {
    if (confirm("Are you sure?")) {
      this.expFormArray.removeAt(index);
    }
  }

  processImage(event){
    if(event.target.files){
      var reader = new FileReader();

    reader.onload = (event:any) => {
      this.image = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
    }
  }
}
