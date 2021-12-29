import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id=""

  pwd=""

  works: any = {
    1000: { id: 1000, uname: "rame", password: "userone", job: "helper" },
    1001: { id: 1002, uname: "ram", password: "usertwo", job: "waiter" },
    1003: { id: 1003, uname: "heera", password: "userthree", job: "engineer" }
  }

  constructor() { }

  ngOnInit(): void {
  }


  idChange(event:any){
   this.id=event.target.value
    console.log(event.target.value);
    
  }

  pwdChange(event:any){
   this.pwd = event.target.value
   console.log(event.target.value);
   

  }


 



  login() {
    var id=this.id

    var pwd =this.pwd

   let  idDetails = this .works

if(id in idDetails){
  if(pwd ==idDetails[id]["password"])
  alert("login successfully")

  else{
    alert("login failed")
  }
  
}
else{
  alert("invalid")
}



  }




}
