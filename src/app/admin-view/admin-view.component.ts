import { Component } from '@angular/core';
import { VenueService } from '../venue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  pdata:any
  pid:any
constructor(private vs:VenueService,private route:Router,private ar:ActivatedRoute){}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
    console.log(this.pid);
    
  }
  )
  this.vs.getSingledata(this.pid).subscribe((result:any)=>{
    this.pdata=result.message
  })
}
deletevenue(){
  this.vs.delete1(this.pid).subscribe((result:any)=>{
    alert('venue deleted')
    this.route.navigateByUrl("/adminViewAll")
  })
}
}
