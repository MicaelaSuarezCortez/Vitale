import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showPassword: boolean;
  public arrayPassword: any[];
  public arrayHidePassword: any[];
  public valuePassword: string;


  constructor() {
    this.showPassword = true;


  }

  ngOnInit(): void {

  }

  getPassword() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);

    let element;
    let newArrayPassword = [];
    if (this.showPassword === true) {
      for (let i = 0; i < this.valuePassword.length; i++) {
        element = this.valuePassword[i];
        newArrayPassword.push(element);
        // this.valuePassword = this.valuePassword;
        console.log(newArrayPassword.length);
      }
    } else {
     for (let j = 0; j < newArrayPassword.length; j++) {
       const element = newArrayPassword[j];
       newArrayPassword.push(element)
     }

      console.log(newArrayPassword);
      console.log(('*'.repeat(newArrayPassword.length)));

  // };


  // showHidePassword(password: string) {

  }
}

}
