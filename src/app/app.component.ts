import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppHeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // pass the template variable to get reference
  @ViewChild("myinput")
  input:ElementRef;

  @ViewChild(AppHeaderComponent)
  appHeader:any;

  processInputData(inputRef) {
    console.log(inputRef.value);
  }

  testInputViewChild() {
    console.log(this.input);
    console.log(this.input.nativeElement.value);
    console.log("App header",this.appHeader);
    console.log(this.appHeader.getData());
  }
}
