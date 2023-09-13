import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  pid:any=''
  pdata:any=[]
constructor(private vs:VenueService,private ar:ActivatedRoute){}
ngOnInit():void{
  this.vs.getallbook().subscribe((result:any)=>{
    this.pdata=result.message
  })
}
}
