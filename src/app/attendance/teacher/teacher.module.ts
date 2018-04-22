import { NgModule } from '@angular/core';
import { TeaRegistrationComponent } from './tea-registration/tea-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes:Routes=[
  {path:"registration",component:TeaRegistrationComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeaRegistrationComponent]
})
export class TeacherModule { }
