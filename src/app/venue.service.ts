import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService implements OnInit{
  //create an object for behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) {}
  ngOnInit():void{
}
//api call to post data
login1(name:any, psw: any) {
  const body = {
    name,
    psw
  }
  return this.http.post('http://localhost:5000/login', body)
}
register(id:any,name:any,phone:any,psw:any) {
  const body = {
    id,
    name,
    phone,
     psw
  }
  return this.http.post('http://localhost:5000/register', body)
}

addData(id:any,name:any,phone:any,address:any,catId:any,desc:any,price:any,image:any,rating:any,place:any){
  const body={
    id,
    name,
    phone,
    address,
     catId,
    desc,
    price,
    image,
    rating,
    place
  }
  return this.http.post('http://localhost:5000/addData', body)
}
book(id:any,gname:any,bname:any,days:any,sdate:any,edate:any,advamt:any,address:any,mobile:any){
  const body={
    id,gname,bname,days,sdate,edate,advamt,address,mobile
  }
  return this.http.post('http://localhost:5000/book', body)
}
getalldata():any{
return this.http.get('http://localhost:5000/getAlldata')
}
getSingledata(id:any){
  return this.http.get('http://localhost:5000/singleData/'+id)
}
getbook(id:any){
  return this.http.get('http://localhost:5000/getBook/'+id)
}
getallbook():any{
  return this.http.get('http://localhost:5000/getallbook')
  }
  getSinglebook(id:any){
    return this.http.get('http://localhost:5000/singlebook/'+id)
  }
  delete1(id:any){
    return this.http.delete('http://localhost:5000/delete1/'+id)
  }
}
