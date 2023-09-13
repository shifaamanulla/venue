import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  // name: any
  // psw: any
  // phone: any
  // cpsw: any
  // id:any

  constructor(private rout: Router, private vs: VenueService,private fb:FormBuilder) { }
  ngOnInit(): void {
  }
registerForm=this.fb.group({
  id:['',[Validators.required,Validators.pattern('[0-9]+')]],
  name:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
  phone:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]],
  cpsw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
})
  signup() {
    var path=this.registerForm.value
    var name = path.name
    var psw = path.psw
    var phone = path.phone
    var cpsw = path.cpsw
    var id=path.id
 if(this.registerForm.valid){
  if (psw == cpsw) {
    this.vs.register(id,name,phone,psw).subscribe((result: any) => {
   alert(result.message)
   this.rout.navigateByUrl('/sign')
    },
      result => {
        alert(result.error.message);

      }
    )
  }
  else {
    alert("password doesnt match")
  }
}
else{
  alert('invalid form')
}
    
  }
  loginForm=this.fb.group({
   name:['',],
   psw:['',] 
  })
  login(){
    if(this.loginForm.valid){
      var name=this.loginForm.value.name
      var psw=this.loginForm.value.psw
      this.vs.login1(name,psw).subscribe((result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl('/addData')
      },
      result=>{
        alert(result.error.message)
      })
    }
    else{
      alert("invalid form")
    }
    }
 
  }

 


