import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./header.component";
import { AppPropertyBindingComponent } from "./examples/property-binding.component";
import { EventBindingComponent } from "./examples/event-binding.component";
import { LoopComponent } from "./examples/loop.component";
import { IfSwitchComponent } from "./examples/if-switch.component";
import { NotesComponent } from "./communication/notes.component";
import { NoteDetailsComponent } from "./communication/note-details.component";
import { HighlightDirective } from "./highlight.directive";
import { LoginComponent } from "./attendance/login/login.component";
import { UserDashboardComponent } from "./attendance/user-dashboard/user-dashboard.component";
import { AttendanceAppComponent } from "./attendance/app/app.component";
import { AdminModule } from "./attendance/admin/admin.module";
import { SharedModule } from "./attendance/shared/shared.module";

var routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "admin",
    loadChildren: "app/attendance/admin/admin.module#AdminModule"
  },
  { path: "user-dashboard", component: UserDashboardComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" } // not found handler
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppPropertyBindingComponent,
    EventBindingComponent,
    LoopComponent,
    IfSwitchComponent,
    NotesComponent,
    NoteDetailsComponent,
    LoginComponent,
    UserDashboardComponent,
    AttendanceAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes)
    //  AdminModule  //Eager loading of feature modules
  ],
  providers: [],
  bootstrap: [AttendanceAppComponent]
})
export class AppModule {}

export var test="";

export function hello(){

}
