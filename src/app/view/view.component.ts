import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
}
