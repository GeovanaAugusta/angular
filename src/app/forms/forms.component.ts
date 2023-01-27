import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { string } from 'joi';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, preco: string}> = [
    { comida: "Bolo", preco: "R$10,00" },
    { comida: "Torta", preco: "R$15,00" },
    { comida: "Bala", preco: "R$1,00" },
  ]

  constructor() {}

  ngOnInit(): void {

  }

  public submitForm(form: NgForm) {

    if (form.valid) {
      console.log(form.value);

    }

  }

}
