import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html"
  // styleUrls: ['./name.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  @Input() note: any;
  @Input() indx: number;
  @Input() details: any;
  @Input() hideMark: boolean;
  @Input() markDoneTimeout: number;
  @Output() onMark: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    if (this.markDoneTimeout) {
      this.activateTimerForMarkDone();
    }
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
