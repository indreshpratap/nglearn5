import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../shared/rest.service';

@Component({
  selector: 'app-tea-edit',
  templateUrl: './tea-edit.component.html',
  styleUrls: ['./tea-edit.component.css']
})
export class TeaEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private rest:RestService) { }

  ngOnInit() {
  console.log("Ng on init");
    // console.log(this.route);
    // console.log(this.route.params);
    this.route.params.subscribe(data=> {console.log("observing == ",data);
    this.rest.fetch("users/"+data.id).subscribe(res=>console.log("Received=",res.data));
  
  });
    // console.log(this.route.paramMap);
    console.log("spapshot",this.route.snapshot.params);
  }

}
