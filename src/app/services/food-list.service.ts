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

  // Substituído pelo método http - get
  // public foodList() {
  //   return this.list;
  // }

  // Usar os módulos do Angular pra possibilitar o uso do HTTP do mesmo.
  // Sempre que se cria um Observable é necessário se inscrever usando o subscribe onde a função é chamada, no componente em questão
    public foodList(): Observable<Array<FoodListI>> {
    return this.http.get<Array<FoodListI>>(`${this.url}/list-food`).pipe(
      next => next,
      error => error,
    );
  }

  // Substituído pelo método http - post
  // public foodListAdd(food: string) {
  //   this.foodListAlert(food)
  //   return this.list.push(food);
  // }

  public foodListAdd(food: string): Observable<FoodListI> {
    return this.http.post<FoodListI>(`${this.url}/list-food`, { nome: food}).pipe(
      next => next,
      error => error,
    );
  }

  public foodListEdit(food: string, id: number): Observable<FoodListI> {
    return this.http.put<FoodListI>(`${this.url}/list-food/${id}`, { nome: food}).pipe(
      next => next,
      error => error,
    );
  }

  public foodListDelete(id: number): Observable<FoodListI> {
    return this.http.delete<FoodListI>(`${this.url}/list-food/${id}`).pipe(
      next => next,
      error => error,
    );
  }

  // Substituído para a re-renderização (reatividade no caso) acontecer ao adicionar um novo alimento
  // public foodListAlert(food: string) {
  //   return this.emitEvent.emit(food);
  // }

  public foodListAlert(food: FoodListI) {
    return this.emitEvent.emit(food);
  }

}
