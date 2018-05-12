import { NgModule } from '@angular/core';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { RouterModule } from '@angular/router';
import {adminRoutes} from './admin.routes';
import { AdmDashComponent } from './adm-dash/adm-dash.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdmHomeComponent, AdmDashComponent]

})
export class AdminModule { }
