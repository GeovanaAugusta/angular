import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public list:Array<{nome: string}> = [];

  public nome: string = ""

  public date: Date = new Date;

  constructor() {}

  ngOnInit(): void {

  }

  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
