import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  public title: string = "Hello world";

  constructor() {}

  ngOnInit(): void {

  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//  selector: 'app-home',
//  templateUrl: './home.component.html',
//  styleUrls: ['./home.component.scss'],
// })

// export class HomeComponent implements OnInit {
//   constructor() {}
//   ngOnInit() {}
// }
