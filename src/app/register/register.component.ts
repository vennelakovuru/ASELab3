import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  lastName='';
  firstName='';
  emailId='';
  password='';
  registerSuccess: boolean = false;
  registerAttempted:boolean= false;

  storeData(){
    this.registerAttempted = true;
    if(this.emailId == '' || this.password == ''){
      this.registerSuccess = false;
    } else {
      localStorage.setItem(this.emailId, this.password);
      this.registerSuccess = true;
    }
  }

  ngOnInit() {
  }

}
