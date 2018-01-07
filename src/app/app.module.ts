import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header.component';
import { AppPropertyBindingComponent } from './examples/property-binding.component';
import { EventBindingComponent } from './examples/event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppPropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
