import { NgModule } from '@angular/core';
import { TeaRegistrationComponent } from './tea-registration/tea-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ResolveGuard } from './user.resolver';
import { TeaEditComponent } from './tea-edit/tea-edit.component';


const routes:Routes=[
  {path:"registration",component:TeaRegistrationComponent,resolve:{
    users:ResolveGuard
  }},
  {path:"edit/:id",component:TeaEditComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[ResolveGuard],
  declarations: [TeaRegistrationComponent, TeaEditComponent]
})
export class TeacherModule { }
