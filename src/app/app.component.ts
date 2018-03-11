import { Component, ViewChild, ElementRef, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { AppHeaderComponent } from './header.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit,AfterViewInit {
  
  
  title = 'app';

  // pass the template variable to get reference
  @ViewChild("button")
  input:ElementRef;

  @ViewChild(AppHeaderComponent)
  appHeader:any;

  @ViewChildren(HighlightDirective)
  buttons:QueryList<HighlightDirective>;

  ngOnInit(): void {
    console.log("Ng On init");
    console.log(this.input);
    console.log(this.appHeader);
    console.log(this.buttons);
  }
  ngAfterViewInit(): void {
    console.log("After View Init");
    console.log(this.input);
    console.log(this.appHeader);
    console.log(this.buttons);
  }

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
