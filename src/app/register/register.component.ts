import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

aim="my register form"

hell="helpfull"


works={
  1000:{id:1000,uname:"rame",password:"userone",job:"helper"},
  1002:{id:1002,uname:"ram",password:"usertwo",job:"waiter"},
  1003:{id:1003,uname:"heera",password:"userthree",job:"engineer"}
}


  constructor() { }

  ngOnInit(): void {
  }

register(){
alert('register successfull')
}




}
