import { Routes } from "@angular/router";
import { UsrRegistrationComponent } from "./usr-registration/usr-registration.component";
import { UsrHomeComponent } from "./usr-home/usr-home.component";

export const userRoutes: Routes = [
  { path: "registration", component: UsrRegistrationComponent },
  { path: "home", component: UsrHomeComponent }
];
