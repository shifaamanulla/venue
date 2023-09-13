import { Component, OnInit } from '@angular/core';
import { VenueService } from 'src/app/venue.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTrem:any=""
constructor( private vs:VenueService){}
  ngOnInit():void{


}
search(event:any){
  this.searchTrem=event.target.value
  //send data to behaviour subject
  this.vs.search.next(this.searchTrem)
  
}

}
