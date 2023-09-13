import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  alldata:any=[]
  catData:any=[]
  searchString:any=""
constructor(private vs:VenueService){}
ngOnInit():void{
  this.vs.getalldata().subscribe((result:any)=>{
    this.alldata=result.message
    console.log(this.alldata);
    this.catData=this.alldata
    this.vs.search.subscribe((value:any)=>{
       this.searchString=value
      
    })
  })
}
categorydata(catid:any){
  this.catData=this.alldata.filter((item:any)=>
  item.catId==catid||catid=="")
  console.log(this.catData) 
  
  
  
  }
}

  
  