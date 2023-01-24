import { Injectable } from '@angular/core';

// Toda aplicação passa a ter acesso ao mesmo
@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  // Mais sentido limitar o acesso à somente esse serviço
  private list: Array<string> = [
    "Torta",
    "Bolo",
    "Sanduíche"
  ];

  constructor() { }

  public foodList() {
    return this.list;
  }

  public foodListAdd(food: string) {
    return this.list.push(food);
  }


}
