import { Component } from '@angular/core';
/**
 * Example of inline template and css in component
 */

@Component({
    selector: "app-property-binding",
    templateUrl: './property-binding.component.html'
})
export class AppPropertyBindingComponent {
    message = "Welcome, to NG class";
    description = "My description";
    current_index = 0;

    notes_status_cls = 'success';

    cls_array=['success','display-inline'];

    cls_obj={};

    constructor() {
        this.setCondition();
        
        setTimeout(() => {
            this.message = "Hi, changed after 2 seconds";

            this.current_index = 22;
            this.cls_array.push('border');

            this.cls_array[0]='warning';

        }, 4000);

        setInterval(() => {
            if (this.notes_status_cls === 'success') {
                this.notes_status_cls = 'warning';
            } else {
                this.notes_status_cls = 'success';
            }
        }, 4000);

    }

    setCondition() {
        this.cls_obj = {
            'success':true,
            'border':true,
            'display-inline':false
        };
    }
}