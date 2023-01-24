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

  public foodList: Array<FoodListI> = []

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
    // Ao adicionar um item, subscrever e pós a validação de ter dado certo, será emitido o valor do alert.
    this.foodListService.emitEvent.subscribe(
      next => {
        alert(`Item adicionado com sucesso => ${next.nome}`);
        return this.foodList.push(next);
      }
    );
  }

  public foodListDelete(id: number) {
    this.foodListService.foodListDelete(id).subscribe(
      // Filtragem para a re-renderização (reatividade no caso) acontecer ao deletar um alimento
      next => {
        this.foodList = this.foodList.filter((item: any) => {
          return id !== item.id
      }
    )
  },
      error => error
    );
  }

  public foodListEdit(food: string, id: number) {
    return this.foodListService.foodListEdit(food, id).subscribe(
      next => {
        return console.log(next);

      },
      error => error,
    )
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
