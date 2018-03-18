import { Routes } from "@angular/router";
import { AdmHomeComponent } from "./adm-home/adm-home.component";
import { AdmDashComponent } from "./adm-dash/adm-dash.component";

export const adminRoutes: Routes = [
  {
    path: "",
    component: AdmHomeComponent,
    children: [{ path: "dashboard", component: AdmDashComponent }]
  }
];
