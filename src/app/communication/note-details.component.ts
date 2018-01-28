import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from "@angular/core";


@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html"
  // styleUrls: ['./name.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy{
  @Input() note: any;
  @Input() indx: number;
  @Input() details: any;
  @Input() hideMark: boolean;
  @Input() markDoneTimeout: number;
  @Output() onMark: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log("NoteDetails constructor: ",this.markDoneTimeout);
  }

  // ngOnChanges(){
  //   console.log("ng on changes");
  // }
  ngOnInit() {
    console.log("Ng OnInit",this.markDoneTimeout);
    if (this.markDoneTimeout) {
      this.activateTimerForMarkDone();
    }
  }
  ngOnDestroy() {
    console.log("Ng On destroy");
  }

  onMarkClick() {
    console.log("clicked inside details");
    this.onMark.emit(this.indx);
  }
  onMarkDelete() {
    this.onDelete.emit(this.indx);
  }

  activateTimerForMarkDone() {
    setTimeout(() => {
      this.onMark.emit(this.indx);
    }, this.markDoneTimeout);
  }
}

// let myc = new NoteDetailsComponent();
// myc.indx=1;
// myc.markDoneTimeout=2000;
// myc.ngOnChanges();
// myc.ngOnInit();
