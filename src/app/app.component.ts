import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // Chamada do ngOnChanges, caso contrário, nada acontece
  template: `
  <app-title title="Hello World"></app-title>
  <router-outlet><router-outlet>`,
  // Evita arquivos desnecessários
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = "Bem vindo!"

  constructor() {}

  // Ciclo de vida 1 - acionado assim que o componente for inicializado.
  ngOnInit(): void {
    setTimeout(() =>  {
      console.log(1)
    }, 5000)
  }

}
