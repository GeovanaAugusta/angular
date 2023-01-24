import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodListI } from '../module/food-list';

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

  private url: string =  "http://localhost:3000"; // list-food

  constructor(private http: HttpClient) { }

  // public foodList() {
  //   return this.list;
  // }

  // Usar os módulos do Angular pra possibilitar o uso do HTTP do mesmo.
    public foodList(): Observable<FoodListI> {
    return this.http.get<FoodListI>(`${this.url}/list-food`).pipe(
      next => next,
      error => error,
    );
  }

  public foodListAdd(food: string) {
    this.foodListAlert(food)
    return this.list.push(food);
  }

  public foodListAlert(food: string) {
    return this.emitEvent.emit(food);
  }


}
