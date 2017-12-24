import {Component} from '@angular/core';
/**
 * Example of inline template and css in component
 */

@Component({
selector:"app-header",
template:`<header>
            <h1>Application header </h1>
            <hr>
        </header>
`,
styles:['h1 { color:blue}']
})
export class AppHeaderComponent {

}