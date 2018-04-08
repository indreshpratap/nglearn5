import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsrHomeComponent } from './usr-home/usr-home.component';
import { UsrRegistrationComponent } from './usr-registration/usr-registration.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UsrHomeComponent, UsrRegistrationComponent]
})
export class UserModule { }
