import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html"
  // styleUrls: ['./name.component.scss']
})
export class NoteDetailsComponent {
  @Input() note: any;
  @Input() details:any;
  constructor() {}
}
