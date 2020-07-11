import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  public showPassword:boolean;
  constructor() { 
    this.showPassword = false
  }

  ngOnInit(): void {
  }

}
