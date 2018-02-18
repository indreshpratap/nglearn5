import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  DoCheck
} from "@angular/core";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html"
  // styleUrls: ['./name.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy, OnChanges,AfterContentInit,AfterViewInit,AfterContentChecked,AfterViewChecked,DoCheck {
 
 
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
      if (changes.details.firstChange) {
        console.log("First change: ", changes.details);
      } else {
        console.log(
          "You have changed the details and it is: ",
          changes.details
        );
      }
    }
    if (changes.note) {
      this.note = { ...changes.note.currentValue };
      console.log("Change in notes", changes.note);
    }
  }
  ngOnInit() {
    console.log("Ng OnInit", this.markDoneTimeout);
    if (this.markDoneTimeout) {
      this.activateTimerForMarkDone();
    }
  }

  ngAfterContentInit(): void {
   console.log("Ng After content init");
  }
  ngAfterViewInit(): void {
   console.log("Ng After view init");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy() {
    console.log("Ng On destroy");
  }

  onMarkClick() {
    console.log("clicked inside details");
    this.note.title = "Changed inside details";
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
