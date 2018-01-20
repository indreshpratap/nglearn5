import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-if-switch",
  templateUrl: "./if-switch.component.html",
  styleUrls: ["./if-switch.component.scss"]
})
export class IfSwitchComponent implements OnInit {
  formSaved = false;

  step: number = 1;

  constructor() {}

  ngOnInit() {}

  doSave() {
    // run your logic to save  then...

    this.formSaved = true;
  }

  changeState() {
    this.formSaved = !this.formSaved;
    var message = this.formSaved ? "Hide it" : "Show it";
    console.log(message);
  }

  next() {
    ++this.step;
    this.processIt();
  }

  prev() {
    --this.step;
    this.processIt();
  }

  /**
   * This is only for info no use on html page, ignore it
   */
  processIt() {
    console.log("Current step value is: ", this.step);
    switch (this.step) {
      case 1:
        console.log("You are on step 1");
        break;
      case 2:
        console.log("You are on step 2");
        break;
      case 3:
        console.log("You are on step 3");
        break;
      case 4:
        console.log("You are on step 4");
        break;
      default:
        console.log("No case matched");
    }
  }
}
