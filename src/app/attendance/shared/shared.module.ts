import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "../../highlight.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CalendarModule } from "primeng/calendar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ErrorsComponent } from "./errors/errors.component";
//Material

import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";

const MATERIAL = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule
];
const PRIMENG = [CalendarModule, InputTextModule, CardModule, ButtonModule];
const NG_IMP_EXP = [CommonModule, FormsModule, ReactiveFormsModule,FlexLayoutModule];

@NgModule({
  imports: [...NG_IMP_EXP, ...PRIMENG, ...MATERIAL],
  declarations: [HighlightDirective, ErrorsComponent],
  exports: [
    HighlightDirective,
    ErrorsComponent,
    ...NG_IMP_EXP,
    ...PRIMENG,
    ...MATERIAL
  ]
})
export class SharedModule {}
