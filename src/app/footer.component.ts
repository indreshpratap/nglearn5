import { Component } from "@angular/core";

@Component({
    selector:"app-footer",
    template:`
    <div class="footer">
    This is footer component
    <div>{{note}}</div>
    </div>
    `,
    styles:['.footer {background-color:green;padding:5px}']
})
export class FooterComponent {
    note = "Registered @2017";

}