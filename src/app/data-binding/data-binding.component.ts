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

  ngOnInit(): void {

  }

}
