import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // Chamada do ngOnChanges, caso contrário, nada acontece
  template: `
  <!-- <app-title title="Item a destruir" *ngIf="destroy"></app-title>
  <app-title title="Hello World"></app-title>
  {{valor}}

  <button (click)="adicionar()">Adicionar</button>
  <button (click)="destruir()">Destruir componente</button>
  <app-data-binding></app-data-binding> -->
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributos</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos> -->

 <!-- <app-pipes></app-pipes> -->

<!-- <app-new-component></app-new-component>
<app-input [contador]="addValue">
</app-input>
<br>
<button (click)="add()">Add</button> -->
<!-- Atributo para já inicializar uma variável -->

<!-- <br>
<br>
<hr> -->

<!-- <ng-template [ngIf]="getDados">
  <h1>{{getDados.nome}}</h1>
  <h2>{{getDados.idade}}</h2>
</ng-template> -->
<!-- Evento de emitir -->
<!-- <app-output (enviarDados)="setDados($event)"></app-output> -->
<app-food-add></app-food-add>

<br>

<app-food-list></app-food-list>

  <router-outlet><router-outlet>`,
  // Evita arquivos desnecessários
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1
  public title = "Bem vindo!"
  public destroy: boolean = true;
  public addValue: number = 0;
  public getDados: {nome: string, idade: number} | undefined;

  constructor() {}

  public adicionar(): number{
    return this.valor +=1;
  }

  public destruir() {
    this.destroy = false;
  }

  public add() {
    this.addValue += 1;
  }

  public setDados(dados: {nome: string, idade: number}) {
    this.getDados = dados;
  }

  // Ciclo de vida 1 - acionado assim que o componente for inicializado.
  ngOnInit(): void {
    setTimeout(() =>  {
      // console.log(1)
    }, 5000)
  }

  // Ciclo de vida 3 - executado a cada mudança - controle de entrada
  ngDoCheck(): void {
    // console.log("ngDoCheck")
  }

  // Ciclo de vida 4 - executado sempre que um conteúdo vindo de uma fonte externa do componente é inserido
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit")
  }

  // Ciclo de vida 5 - executado quando o conteúdo externo é verificado
  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked")
  }

// Ciclo de vida 6 - executado logo após os dados dos filhos e do próprio componente ser inicializado
ngAfterViewInit(): void {
  // console.log("ngAfterViewInit")
 }

// Ciclo de vida 7 - executado sempre que é detectado uma alteração do conteúdo é chamado esse cara.
ngAfterViewChecked(): void {
  // console.log("ngAfterViewChecked")
 }

}
