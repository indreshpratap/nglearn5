import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html"
  //   styleUrls: ['./name.component.scss']
})
export class NotesComponent {
  mynotes = [];
  completedNotes = [];

  constructor() {
    this.mynotes = [
      {
        title: "First note",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non error dolores maxime natus corrupti ad iure iste sequi quod tempore amet perferendis rerum facilis, odit quasi est dolorum. Consectetur, ipsam?"
      },
      {
        title: "To do",
        description: "finish task 1, finish task 2, finish task 3"
      },
      { title: "Angluar ngfor", description: "notes about angular ng for" },
      { title: "Css examples", description: "myclass {border:1px solid ;}" },
      { title: "Html exmaple", description: "<div>This is html</div>" }
    ];
  }

  markDone(indx) {
    // copying from mynotes to completed notes
    this.completedNotes.push(this.mynotes[indx]);
    // removing from my notes
    this.mynotes.splice(indx, 1);
  }

  deleteFromPending(indx) {
    this.mynotes.splice(indx,1);
  }

  deleteFromComplete(indx) {
    this.completedNotes.splice(indx,1);
  }
}
