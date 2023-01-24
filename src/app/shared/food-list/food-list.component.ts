import { Component, OnInit } from '@angular/core';
import { FoodListI } from 'src/app/module/food-list';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodListI | any;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
   this.foodListService.foodList().subscribe(
    next => this.foodList = next,
    error => error,
   );
    // Em outras linhas, a injeção seria:
    // let list = new FoodListService();
    // this.foodList = list.foodList()

    // Nova maneira de usar o subscribe:
    //  this.foodListService.foodList().subscribe({
    // next: (n) => this.foodList = n,
    // error:(e) => e

    // Sempre que um evento for emitido, trará uma resposta
    this.foodListService.emitEvent.subscribe(
      next => alert(`Item adicionado com sucesso => ${next}`)
    );
  }

}

// ANTES
// .subscribe({
//   (res) => console.log(res),
//   (err) => console.log(err),
// });

// DEPOIS
// .subscribe({
//   next: (res) => console.log(res),
//   error: (err) => console.log(err),
// });
