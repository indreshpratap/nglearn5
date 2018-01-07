import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    // styleUrls: ['./name.component.scss']
})
export class EventBindingComponent {
   
    clickMe(event) {
        alert("Yes you clicked");
        console.log(event);
    }


    clickMeWithParams(id) {
        alert("Yes you clicked "+id);
        
    }
}