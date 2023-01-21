import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // Chamada do ngOnChanges, caso contrário, nada acontece
  template: `
  <app-title title="Item a destruir" *ngIf="destroy"></app-title>
  <app-title title="Hello World"></app-title>
  {{valor}}

  <button (click)="adicionar()">Adicionar</button>
  <button (click)="destruir()">Destruir componente</button>
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet><router-outlet>`,
  // Evita arquivos desnecessários
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1
  public title = "Bem vindo!"
  public destroy: boolean = true;

  constructor() {}

  public adicionar(): number{
    return this.valor +=1;
  }

  public destruir() {
    this.destroy = false;
  }

  // Ciclo de vida 1 - acionado assim que o componente for inicializado.
  ngOnInit(): void {
    setTimeout(() =>  {
      console.log(1)
    }, 5000)
  }

  // Ciclo de vida 3 - executado a cada mudança - controle de entrada
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  // Ciclo de vida 4 - executado sempre que um conteúdo vindo de uma fonte externa do componente é inserido
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  // Ciclo de vida 5 - executado quando o conteúdo externo é verificado
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

// Ciclo de vida 6 - executado logo após os dados dos filhos e do próprio componente ser inicializado
ngAfterViewInit(): void {
  console.log("ngAfterViewInit")
 }

// Ciclo de vida 7 - executado sempre que é detectado uma alteração do conteúdo é chamado esse cara.
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked")
 }

}
