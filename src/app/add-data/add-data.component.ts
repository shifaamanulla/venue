import { Component } from '@angular/core';
import { VenueService } from '../venue.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  // id:any
  // name:any
  // address:any
  // phone:any
  // catId:any
  // desc:any
  // price:any
  // image:any
  // rating:any
  // place:any
  // pdata:any
  constructor(private vs:VenueService,private rout:Router,private fb:FormBuilder){}
  addDataform=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]+')]],
  name:[''],
  address:[''],
  phone:['',[Validators.required,Validators.pattern('[0-9]+')]],
  catId:['',[Validators.required,Validators.pattern('[0-9]+')]],
  desc:[''],
  price:['',[Validators.required,Validators.pattern('[0-9]+')]],
  image:[''],
  rating:['',[Validators.required,Validators.pattern('[0-9]+')]],
  place:['',[Validators.required,Validators.pattern('[A-Za-z]+')]]
  })
adddata(){
 var path=this.addDataform.value
  var id=path.id
  var name=path.name
  var phone=path.phone
 var address=path.address
 var catId=path.catId
 var desc=path.desc
 var price=path.price
 var image=path.image
 var rating=path.rating
 var place=path.place
 if(this.addDataform.valid){
  this.vs.addData(id,name,phone,address,catId,desc,price,image,rating,place).subscribe((result:any)=>{
    alert(result.message)
    this.rout.navigateByUrl('/adminViewAll')
   },
   result=>{
    alert(result.error.message)
   }
   )
   
 }
 else{
  alert('invalid form')
 }

}
}


  