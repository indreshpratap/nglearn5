import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"; // imports everything from rxjs
@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit {
  constructor() {}

  obser;
  ngOnInit() {
    this.obser = Observable.create(obser => {
      obser.next(1);
      setTimeout(() => {
        obser.next(2);
      }, 1000);

      setTimeout(() => {
        obser.next(3);
      }, 2000);
      setTimeout(() => {
         obser.next(4);
        // obser.error("throw new error from obser");
      }, 3000);
      setTimeout(() => {
         obser.next(5);
       obser.complete();
      }, 4000);
    });
  }

  start() {
 let sub1=   this.obser.map(data => data * 10).subscribe(
      res => console.log("First: ", res),
      err => {console.error(err)},
      () => {
        console.log("completed");
      }
    );
    setTimeout(() => {
      sub1.unsubscribe();
      this.obser
        .filter(data => data > 1)
        .subscribe(
          res => console.log("Second: ", res),
          err => console.error("Recevied second error:", err),
          ()=>console.log("")
        );
    }, 2000);
  }
}
