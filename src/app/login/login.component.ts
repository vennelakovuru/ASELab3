import { Component, OnInit } from '@angular/core';
import {LOCAL_STORAGE} from "ngx-webstorage-service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  emailId='';
  password ='';
  storedPassword ='';
  loginSuccess:boolean = false;
  loginAttempted:boolean =false;

  validate(){
    this.loginAttempted = true;
    this.storedPassword =localStorage.getItem(this.emailId);
    if(this.password == this.storedPassword) {
    this.loginSuccess= true;
    this.router.navigateByUrl("/home");
    }

  }
  ngOnInit() {
  }

}
