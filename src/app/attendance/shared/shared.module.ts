import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "../../highlight.directive";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ErrorsComponent } from './errors/errors.component';

const PRIMENG = [CalendarModule, InputTextModule, CardModule, ButtonModule];
const NG_IMP_EXP=[CommonModule, FormsModule,ReactiveFormsModule];

@NgModule({
  imports: [...NG_IMP_EXP, ...PRIMENG],
  declarations: [HighlightDirective, ErrorsComponent],
  exports: [HighlightDirective,ErrorsComponent,...NG_IMP_EXP, ...PRIMENG]
})
export class SharedModule {}
