import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  // @Input - uma fn recebendo um obj -entrada de valor no componente
  @Input() public title: string = "Hello world";

  constructor() {}

  ngOnInit(): void {

  }

  // Cilo de vida 2  - só é invocado com entrada de dado, ou seja, alteração do componente
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso")
    // alert("Foi alterado com sucesso")
  }

  // Cilo de vida 8  - executado na destruição do componente.
  ngOnDestroy(): void {
      console.log("Componente destruído")
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
