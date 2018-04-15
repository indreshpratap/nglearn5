import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.css"]
})
export class ErrorsComponent implements OnInit, OnChanges {
  @Input() control: AbstractControl;
  @Input() label: string;
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.label) {
      this.label = "Field";
    }
  }

  constructor() {}

  ngOnInit() {}
}
