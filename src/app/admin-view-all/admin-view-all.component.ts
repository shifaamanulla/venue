import { Component } from '@angular/core';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-admin-view-all',
  templateUrl: './admin-view-all.component.html',
  styleUrls: ['./admin-view-all.component.css']
})
export class AdminViewAllComponent {
  alldata:any=[]


constructor(private vs:VenueService){}
ngOnInit():void{
  this.vs.getalldata().subscribe((result:any)=>{
    this.alldata=result.message
    console.log(this.alldata);
  
  
      
    })
  
}
}
