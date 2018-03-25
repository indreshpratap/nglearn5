import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "../../highlight.directive";
import { FormsModule } from "@angular/forms";

import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
const PRIMENG = [CalendarModule, InputTextModule, CardModule, ButtonModule];
@NgModule({
  imports: [CommonModule, FormsModule, ...PRIMENG],
  declarations: [HighlightDirective],
  exports: [HighlightDirective, FormsModule, CommonModule, ...PRIMENG]
})
export class SharedModule {}
