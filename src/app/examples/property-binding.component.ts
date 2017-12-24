import { Component } from '@angular/core';
/**
 * Example of inline template and css in component
 */

@Component({
    selector: "app-property-binding",
    templateUrl: './property-binding.component.html'
})
export class AppPropertyBindingComponent {
    message = "Welcome, and this is interpolation";
    total = 100;
    uniqueid = "uni001";

    constructor() {
        // Changing the property and check the id of div and value of input will be changed on screen
        setTimeout(() => {
            this.uniqueid = "0009999";
        }, 10000);
    }
}