import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  // Injeção de dependência, pelo service
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {

  }

  public listAddItem(food: string) {
    // console.log(food);
    return this.foodListService.foodListAdd(food);
  }

}
// Input/output, comunicação entre componentes
