import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Nome", idade: 23 },
    { nome: "Nome2", idade: 25 }
  ]

  constructor() {}

  ngOnInit(): void {

  }

  public getDados(index: number) {
    this.enviarDados.emit(this.list[index]);
    console.log(this.list[index]);
    console.log(this.enviarDados.emit(this.list[index]));
  }

}
