import { Component } from '@angular/core';
import { VenueService } from '../venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  id:any
  gname:any
  bname:any
  days:any
  sdate:any
  edate:any
  advamt:any
  address:any
  mobile:any
constructor(private vs:VenueService,private route:Router){}
 book(){
 var id=this.id
 var gname=this.gname
 var bname=this.bname
 var days=this.days
 var sdate=this.sdate
 var edate=this.edate
  var  advamt=this.advamt
  var address=this.address
  var mobile=this.mobile
  this.vs.book(id,gname,bname,days,sdate,edate,advamt,address,mobile).subscribe((result: any) => {
    alert(result.message)
this.route.navigateByUrl('/download')
     },
       result => {
         alert(result.error.message);

       }
     )
   }
 }

