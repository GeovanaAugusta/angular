import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Geovana";
  public idade: number = 25;
  public valorUm: number = 1;
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  public imgTitle: string = "Property Binding"

 public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() {}

  ngOnInit(): void {

  }

  public alertaInfo(valor: string) {
    alert(valor);

  }

  public alertaInfo2(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }


}
