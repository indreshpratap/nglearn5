import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  SimpleChanges
} from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html"
  // styleUrls: ['./name.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() note: any;
  @Input() indx: number;
  @Input() details: any;
  @Input() hideMark: boolean;
  @Input() markDoneTimeout: number;
  @Output() onMark: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log("NoteDetails constructor: ", this.markDoneTimeout);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.details) {
      if(changes.details.firstChange){
        console.log("First change: ", changes.details);

      }else {
        console.log("You have changed the details and it is: ", changes.details);
      }

    }
    if(changes.note) {
      this.note = {...changes.note.currentValue};
      console.log("Change in notes",changes.note);
    }
  }
  ngOnInit() {
    console.log("Ng OnInit", this.markDoneTimeout);
    if (this.markDoneTimeout) {
      this.activateTimerForMarkDone();
    }
  }
  ngOnDestroy() {
    console.log("Ng On destroy");
  }

  onMarkClick() {
    console.log("clicked inside details");
    this.note.title="Changed inside details";
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
