import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "PessoaX", idade: 25},
    { nome: "PessoaY", idade: 2},
    { nome: "PessoaZ", idade: 21}
  ]

  constructor() {}

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition)
      this.condition = false;
      else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
      if (this.conditionClick)
      this.conditionClick = false;
      else {
        this.conditionClick = true;
      }
  }

  public onClickAddlist() {
    this.list.push({ nome: "Nay", idade: 31 })
  }

  public onClickEventList(event: MouseEvent) {
    console.log(event);
  }

  public onClickEventRemove(i: number) {
    this.list.splice(i, 1)
  }
}
