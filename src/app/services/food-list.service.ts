import { EventEmitter, Injectable } from '@angular/core';

// Toda aplicação passa a ter acesso ao mesmo
@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  // Emissor de evento
  public emitEvent = new EventEmitter();

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
    this.foodListAlert(food)
    return this.list.push(food);
  }

  public foodListAlert(food: string) {
    return this.emitEvent.emit(food);
  }


}
