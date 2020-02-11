import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  lastName=[];
  firstName='';
  emailId='';
  password='';



  storeData(){
    localStorage.setItem('users', JSON.stringify(this.lastName));
  }

  ngOnInit() {
  }

}
