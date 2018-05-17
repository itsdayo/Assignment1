import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../../models/user.model.client'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {



//properties 
username: string;
password: string;
errorFlag: boolean;
errorMsg = 'Invaild username or password!';
  constructor() { }

  ngOnInit() {}
}
