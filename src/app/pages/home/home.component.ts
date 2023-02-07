import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  account: string = '';
  password: string = '';

  validateLogin(username: string, password: string) {
    const accounts = [
      {account: 'admin', password: '1234'},
      {account: 'user', password: '5678'}
    ];

    for (let i = 0; i < accounts.length; i++) {
      if (username === accounts[i].account && password === accounts[i].password) {
        return true;
      }
    }
    return false;
  }

}
