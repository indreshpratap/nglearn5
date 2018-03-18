import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { RouterModule } from '@angular/router';
import {adminRoutes} from './admin.routes';
import { AdmDashComponent } from './adm-dash/adm-dash.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdmHomeComponent, AdmDashComponent]
})
export class AdminModule { }
